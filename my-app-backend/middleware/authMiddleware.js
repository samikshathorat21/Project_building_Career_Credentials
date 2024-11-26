const isAuthenticated = (req, res, next) => {
    if (req.session.user) next();
    else res.status(401).send('Unauthorized');
  };
  
  module.exports = isAuthenticated;
  