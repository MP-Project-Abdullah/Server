const userPackagesModel = require("../../db/model/userPackages");

const createUserPackages = (req, res) => {
  const { packageId, userId,donate } = req.params;

  const newUserPackage = new userPackagesModel({
    package: packageId,
    user: userId,
    total: donate,
  });
  newUserPackage.save().then((result) => {
    res.status(200).json(result);
  });
};

const createUserPackage = (req, res) => {
  const {  userId,donate } = req.params;

  const newUserPackage = new userPackagesModel({
    user: userId,
    total: donate,
  });
  newUserPackage.save().then((result) => {
    res.status(200).json(result);
  });
};

const getUserPackage = (req, res) => {
  const { packageId, userId } = req.params;

  userPackagesModel
    .find({ $and: [{ packge: packageId }, { user: userId }] })
    .populate("package user")
    .then((result) => {
      res.status(200).json(result);
    });
};

const getUserPackages = (req, res) => {
  const { userId } = req.params;

  userPackagesModel
    .find({ user: userId })
    .populate("package")
    .then((result) => {
      res.status(200).json(result);
    });
};

module.exports = { createUserPackages,createUserPackage, getUserPackage, getUserPackages };
