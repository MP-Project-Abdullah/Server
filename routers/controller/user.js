const userModel = require("../../db/model/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const secret = process.env.SECRET_KEY;
const salt = Number(process.env.SALT);

// Create new user
const register = async (req, res) => {
  const { email, username, password, name } = req.body;

  const savedEmail = email.toLowerCase();
  const savedPassword = await bcrypt.hash(password, salt);
  try {
    let code = "";
    const num = "0123456789";
    for (let i = 0; i < 4; i++) {
      code += num.charAt(Math.floor(Math.random() * num.length));
    }

    let mailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const newUser = new userModel({
      email: savedEmail,
      username: username,
      password: savedPassword,
      activateCode: code,
      name,
    });
    newUser
      .save()
      .then((result) => {
        let mail = {
          from: "w08d04socialmedia@gmail.com",
          to: result.email,
          subject: "Confirm your email",
          text: `Please enter this code ${code} ,Thank you!`,
        };
        mailTransporter.sendMail(mail, (err, data) => {
          if (err) {
            res.status(400).json(err);
          } else {
            res.status(200).json(result);
          }
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Login user
const login = (req, res) => {
  const { data, password } = req.body;

  userModel
    .findOne({ $or: [{ email: data }, { username: data }] })
    .then(async (result) => {
      if (result) {
        if (result.email == data || result.username == data) {
          const savedPassword = await bcrypt.compare(password, result.password);
          const payload = {
            _id: result._id,
            role: result.role,
          };
          if (savedPassword) {
            let token = jwt.sign(payload, secret);
            res.status(200).json({ result, token });
          } else {
            res.status(200).json("Wrong email or password");
          }
        } else {
          res.status(200).json("Wrong email or password");
        }
      } else {
        res.status(200).json("not found");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

// Get all users
const getUsers = (req, res) => {
  userModel
    .find({})
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Get user by id
const getUser = (req, res) => {
  const { id } = req.params;
  userModel
    .find({ _id: id })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Toggle delete user ( soft )
const softDel = (req, res) => {
  const { _id } = req.params;
  try {
    userModel.findById({ _id: _id }).then((item) => {
      if (item) {
        if (item.isDel == false) {
          userModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: true } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        } else {
          userModel
            .findByIdAndUpdate(
              { _id: _id },
              { $set: { isDel: false } },
              { new: true }
            )
            .then((result) => {
              res.status(200).json(result);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
      } else {
        res.status(400).send("User not found");
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// Update info user
const updateUser = (req, res) => {
  const { _id } = req.params;
  const { name, bio, avatar } = req.body;
  userModel
    .findOneAndUpdate(
      { _id: _id },
      { $set: { name: name, bio: bio, avatar: avatar } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(404).send("user not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Activate user
const activatetUser = (req, res) => {
  const { _id } = req.params;
  userModel
    .findOneAndUpdate({ _id: _id }, { $set: { activate: true } }, { new: true })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Reset user password
const resetPass = async (req, res) => {
  const { email } = req.params;
  const { password } = req.body;
  const savedPassword = await bcrypt.hash(password, salt);

  userModel
    .findOneAndUpdate(
      { email: email },
      { $set: { password: savedPassword } },
      { new: true }
    )
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Send code to the user email to reset hes password
const sendCodeResetPass = (req, res) => {
  const { email } = req.params;
  let code = "";
  const num = "0123456789";
  for (let i = 0; i < 4; i++) {
    code += num.charAt(Math.floor(Math.random() * num.length));
  }
  userModel
    .findOneAndUpdate(
      { email: email },
      { $set: { resetPass: true, resetCode: code } }
    )
    .then(async (result) => {
      try {
        if (result) {
          let mailTransporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            requireTLS: true,
            auth: {
              user: "w08d04socialmedia@gmail.com",
              pass: "Aa112233",
            },
          });
          let mail = {
            from: "w08d04socialmedia@gmail.com",
            to: result.email,
            subject: "Reset your passwor",
            text: `Please enter this code ${code} ,Thank you!`,
          };
          await mailTransporter.sendMail(mail, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Email sent");

              res.status(200).json(result);
            }
          });
        }
      } catch (error) {
        console.log("ererererer", error);
      }
    })
    .catch((err) => console.log(err));
};

// Get user by email
const getUserByEmail = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: email })
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Users not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Contact us
const contactUs = async (req, res) => {
  const { firstName, lastName, email, question } = req.body;
  let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: "w08d04socialmedia@gmail.com",
      pass: "Aa112233",
    },
  });
  let mail = {
    from: "w08d04socialmedia@gmail.com",
    to: "w08d04socialmedia@gmail.com",
    subject: `Question from ${firstName} ${lastName}`,
    text: `${question} from: ${email}`,
  };
  await mailTransporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent");

      res.status(200).json(result);
    }
  });
};


module.exports = {
  register,
  login,
  softDel,
  getUsers,
  getUser,
  updateUser,
  activatetUser,
  resetPass,
  sendCodeResetPass,
  getUserByEmail,
  contactUs
};
