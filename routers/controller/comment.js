const commentModel = require("../../db/model/comment");

// Create new comment
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

// Delete comment
const deleteCommet = (req, res) => {
  const { _id } = req.params;
  commentModel
    .findOneAndDelete({ _id: _id })
    .then((result) => {
      if (result) {
        res.status(200).json("Comment deleted");
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { newComment,deleteCommet };
