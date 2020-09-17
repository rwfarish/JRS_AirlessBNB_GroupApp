const {
  postListing,
  getListings,
  getListingsByCity,
} = require('../controllers/listingControllers');

const listingRoutes = (app) => {
  //listing routes
  app.post('/listing', postListing);
  app.get('/listings', getListings);
  app.get('/listingbycity', getListingsByCity);
};

module.exports = { listingRoutes };
