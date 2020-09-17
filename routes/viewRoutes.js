const {
  getHomePage,
  getListingsPage,
} = require('../controllers/viewControllers');

const viewRoutes = (app) => {
  //view routes
  app.get('/', getHomePage);
  app.get('/listingspage', getListingsPage);
};

module.exports = { viewRoutes };
