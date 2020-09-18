const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  state: { type: String, required: true },
  price: { type: String, required: true },
  guestAmount: { type: Number, required: true },
  bedAmount: { type: String, required: true },
  bathAmount: { type: String, required: true },
  parking: { type: String, required: true },
  image: { type: String, required: true },
  city: { type: String, required: true },
  rating: { type: String, required: true },
  description: { type: String, required: true },
  fireExtinguisher: { type: String, required: true },
});

const ListingModel = mongoose.model("listing", listingSchema);

module.exports = ListingModel;
