const express = require('express');
const rewardController = require('../controllers/rewardController');
const router = express.Router();

router.get('/rewards', rewardController.getRewards);
router.post('/redeem', rewardController.redeemReward);

module.exports = router;