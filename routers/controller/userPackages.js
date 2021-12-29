const userPackagesModel = require("../../db/model/userPackages");

// Create packages for the user after he buy the package
const createUserPackages = (req, res) => {
  const { packageId, userId, donate } = req.params;

  const newUserPackage = new userPackagesModel({
    package: packageId,
    user: userId,
    total: donate,
  });
  newUserPackage.save().then((result) => {
    res.status(200).json(result);
  });
};

// Create packages for the user after he buy the package
const createUserDonate = (req, res) => {
  const { userId, donate } = req.params;

  const newUserPackage = new userPackagesModel({
    user: userId,
    total: donate,
  });
  newUserPackage.save().then((result) => {
    res.status(200).json(result);
  });
};

// Git user packages
const getUserPackage = (req, res) => {
  const { packageId, userId } = req.params;

  userPackagesModel
    .find({ $and: [{ packge: packageId }, { user: userId }] })
    .populate("package user")
    .then((result) => {
      res.status(200).json(result);
    });
};

// Get user donations
const getUserDonations = (req, res) => {
  const { userId } = req.params;

  userPackagesModel
    .find({ user: userId })
    .populate("package")
    .then((result) => {
      res.status(200).json(result);
    });
};

module.exports = {
  createUserPackages,
  createUserDonate,
  getUserPackage,
  getUserDonations,
};
