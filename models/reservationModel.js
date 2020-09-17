const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  reservedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  reservedListing: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'listing',
  },
});

const ReservationModel = mongoose.model('reservation', reservationSchema);

module.exports = ReservationModel;
