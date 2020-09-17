const {
  getReservation,
  postReservation,
  deleteReservation,
} = require('../controllers/reservationControllers');
const { authUser, authorizeUser } = require('../controllers/authController');

const reservationRoutes = (app) => {
  //reservation routes
  app.get('/reservation', getReservation);
  app.post('/reservation', authorizeUser, postReservation);
  app.delete('/reservation', deleteReservation);
};

module.exports = { reservationRoutes };
