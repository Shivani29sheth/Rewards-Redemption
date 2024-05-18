const db = require('../config/db.config');

const getUsers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};

const getUserPoints = async (userId) => {
  const [rows] = await db.query('SELECT points FROM users WHERE id = ?', [userId]);
  return rows[0];
};

module.exports = { getUsers, getUserPoints };