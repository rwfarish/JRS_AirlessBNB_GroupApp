const path = require('path');

const getHomePage = async (request, response) => {
  try {
    console.log('send home page');
    response.sendFile(path.join(__dirname + '/../views/airbnb.html'));
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const getListingsPage = async (request, response) => {
  try {
    console.log('send home page');
    response.sendFile(path.join(__dirname + '/../views/listings.html'));
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

module.exports = { getHomePage, getListingsPage };
