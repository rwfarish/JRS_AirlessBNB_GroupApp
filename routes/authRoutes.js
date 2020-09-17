const { authUser, authorizeUser } = require('../controllers/authController');

const authRoutes = (app) => {
  //auth route
  app.post('/authenticateuser', authUser);
};

module.exports = { authRoutes };
