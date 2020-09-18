// initial loop used to create 50 listings

const listings = require("./aspenData");
const ListingModel = require("./models/listingModel");
const mongoose = require("mongoose");
require("dotenv").config();
const un = process.env.user;
const pw = process.env.password;

mongoose.connect(
  `mongodb+srv://${un}:${pw}@cluster0.kzid4.mongodb.net/airbnbDb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
async function listingLoop() {
  try {
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].guestAmount) {
        listings[i].guestAmount = Number(listings[i].guestAmount);
      }

      const listingsArr = await ListingModel.create(listings[i]);
    }
    // for (let i = 0; i < listings.length; i++) {
    //   if (listings[i].description == null) {
    //     console.log(listings[i]);
    //   }
    // }
  } catch (error) {
    console.log(error);
  }
}

listingLoop();
console.log("DONE");
