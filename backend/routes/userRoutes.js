const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/users/:userId/points', userController.getUserPoints);
router.get('/users/:userId/redemptions', userController.getUserRedemptions);

module.exports = router;