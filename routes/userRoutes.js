const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    meassage: 'This route is not yet defind!'
  });
};

const router = express.Router();

router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;
