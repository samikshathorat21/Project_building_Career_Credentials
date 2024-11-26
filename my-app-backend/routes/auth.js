const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
  db.query(query, [email, password], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length > 0) {
      req.session.user = result[0];
      res.send('Logged in');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => res.send('Logged out'));
});

module.exports = router;
