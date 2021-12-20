const commentModel = require("../../db/model/comment");

const newComment = (req, res) => {
  const { desc } = req.body;
  const { userId, projectId } = req.params;
  try {
    const newComment = new commentModel({
      desc,
      time: Date(),
      user: userId,
      project: projectId,
    });
    newComment
      .save()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { newComment };
