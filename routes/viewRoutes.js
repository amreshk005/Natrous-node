const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();
router.get('/', viewController.getOverview);

// router.use(authController.isLoggedIn);

router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.getLoginForm);

module.exports = router;
