
const { mysqlPool } = require('../db/connection');

async function createUser(username, email, hashedPassword) {
  const [rows] = await mysqlPool.query(
    'INSERT INTO users (username,email, password, createdAt) VALUES (?,?, ?, NOW())',
    [username,email, hashedPassword]
  );
  return rows.insertId;
}

async function findUserByEmail(email) {
  const [rows] = await mysqlPool.query(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0]; 
}

module.exports = { createUser, findUserByEmail };

