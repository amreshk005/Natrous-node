const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  //Send Response
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};
