const ListingModel = require('../models/listingModel');

const postListing = async (request, response) => {
  try {
    console.log('post a listing');
    const listInstance = new ListingModel(request.body);
    const createdListing = await ListingModel.create(listInstance);
    response.status(201).send(createdListing);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getListings = async (request, response) => {
  try {
    console.log('get all listings');
    const listings = await ListingModel.find();
    response.status(200).send(listings);
  } catch (error) {
    response.status(500).send(error);
  }
};

const getListingsByCity = async (request, response) => {
  try {
    console.log('get listing by city');
    const city = request.query.city;
    const cityListing = await ListingModel.find({ city });
    response.status(200).send(cityListing);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { postListing, getListings, getListingsByCity };
