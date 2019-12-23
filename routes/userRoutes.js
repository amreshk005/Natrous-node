const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

//here we use middleware for protect every route which comes after it.
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);

//currently there is no for controller for both route that's why we are commenting it!
// router.patch('/updateMe', userController.updateMe);
// router.delete('/deleteMe', userController.deleteMe);

//here we use middleware to allow only admin, the only routes which comes after it.
router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  // .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
