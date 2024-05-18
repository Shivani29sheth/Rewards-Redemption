const db = require('../config/db.config');

const getRewards = async () => {
  const [rows] = await db.query('SELECT * FROM rewards');
  return rows;
};

module.exports = { getRewards };