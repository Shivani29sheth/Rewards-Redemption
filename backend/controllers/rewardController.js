const rewardModel = require('../models/rewardModel');
const redemptionModel = require('../models/redemptionModel');
const userModel = require('../models/userModel');

const getRewards = async (req, res) => {
  try {
    const rewards = await rewardModel.getRewards();
    res.json(rewards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const redeemReward = async (req, res) => {
  try {
    const { userId, rewardId } = req.body;
    const rewards = await rewardModel.getRewards();
    const reward = rewards.find(r => r.id === rewardId);

    if (!reward) {
      return res.status(400).json({ error: 'Reward not found' });
    }

    const userPoints = await userModel.getUserPoints(userId);

    if (userPoints.points < reward.points) {
      return res.status(400).json({ error: 'Not enough points' });
    }

    await redemptionModel.redeemReward(userId, rewardId, reward.points);
    res.status(200).json({ message: 'Reward redeemed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRewards, redeemReward };
