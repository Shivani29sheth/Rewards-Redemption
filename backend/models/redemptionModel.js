const db = require('../config/db.config');

const getUserRedemptions = async (userId) => {
  const [rows] = await db.query('SELECT * FROM redemptions WHERE user_id = ?', [userId]);
  return rows;
};

const redeemReward = async (userId, rewardId, points) => {
  await db.query('INSERT INTO redemptions (user_id, reward_id) VALUES (?, ?)', [userId, rewardId]);
  await db.query('UPDATE users SET points = points - ? WHERE id = ?', [points, userId]);
};

module.exports = { getUserRedemptions, redeemReward };