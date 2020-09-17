const ReservationModel = require('../models/reservationModel');

const getReservation = async (request, response) => {
  try {
    const reservation = await ReservationModel.find();
    response.status(200).send(reservation);
  } catch (error) {
    console.log(error);
  }
};

const postReservation = async (request, response) => {
  try {
    console.log(request.body);
    const startDate = request.body.startDate;
    const endDate = request.body.endDate;
    const reservedBy = request.decodedToken.id;
    const reservedListing = request.body.reservedListing;
    const createdReservation = await ReservationModel.create({
      startDate,
      endDate,
      reservedBy,
      reservedListing,
    });
    response.status(201).send(createdReservation);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
};

const deleteReservation = async (request, response) => {
  try {
    const id = request.query.id;
    const result = await ReservationModel.findByIdAndDelete(id);
    response.status(200).send(result);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { getReservation, postReservation, deleteReservation };
