const { postUser, getUser } = require('../controllers/userControllers');

const userRoutes = (app) => {
  //user routes
  app.post('/user', postUser);
  app.get('/users', getUser);
};

module.exports = { userRoutes };
