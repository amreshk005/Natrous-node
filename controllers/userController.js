const User = require('../models/userModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind! Please use /signup instead'
  });
};
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getUser = factory.getOne(User);
exports.getAllUsers = factory.getAll(User);
//DO NOT update passwords with this
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
