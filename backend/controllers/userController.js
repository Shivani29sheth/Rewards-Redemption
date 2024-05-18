const userModel = require('../models/userModel');
const redemptionModel = require('../models/redemptionModel');

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserPoints = async (req, res) => {
  try {
    const { userId } = req.params;
    const points = await userModel.getUserPoints(userId);
    res.json(points);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserRedemptions = async (req, res) => {
  try {
    const { userId } = req.params;
    const redemptions = await redemptionModel.getUserRedemptions(userId);
    res.json(redemptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, getUserPoints, getUserRedemptions };