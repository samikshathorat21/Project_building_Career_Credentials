const express = require('express');
const db = require('../config/db');
const isAuthenticated = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  res.json(req.session.user);
});

router.post('/update', isAuthenticated, (req, res) => {
  const { first_name, last_name, phone, email } = req.body;
  const query = 'UPDATE users SET first_name = ?, last_name = ?, phone = ?, email = ? WHERE id = ?';
  db.query(query, [first_name, last_name, phone, email, req.session.user.id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Profile updated');
  });
});

module.exports = router;
