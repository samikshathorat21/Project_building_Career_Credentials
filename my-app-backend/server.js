const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'));

app.listen(3000, () => console.log('Server running on port 3000'));
