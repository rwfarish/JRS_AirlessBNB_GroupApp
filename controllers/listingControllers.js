const ListingModel = require("../models/listingModel");

const postListing = async (request, response) => {
  try {
    console.log("post a listing");
    const listInstance = new ListingModel(request.body);
    const createdListing = await ListingModel.create(listInstance);
    response.status(201).send(createdListing);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getListings = async (request, response) => {
  try {
    console.log("get all listings");
    const listings = await ListingModel.find();
    response.status(200).send(listings);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getListingsByCity = async (request, response) => {
  try {
    console.log("get listing by city");
    const city = request.query.city;
    const guests = request.query.guestAmount;
    console.log(guests);
    let cityListing;
    if (guests == "all") {
      console.log("inside if stmnt");
      cityListing = await ListingModel.find({ city });
    } else if (guests == "5 or more") {
      console.log("inside SECOND if stmnt");
      cityListing = await ListingModel.find({
        city,
        guestAmount: { $gt: 4 },
      });
    } else {
      console.log("inside THIRD if stmnt");
      cityListing = await ListingModel.find({
        city,
        guestAmount: guests,
      });
    }

    console.log("city listing", cityListing);
    response.status(200).send(cityListing);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { postListing, getListings, getListingsByCity };
