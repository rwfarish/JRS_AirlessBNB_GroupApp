const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const postUser = async (request, response) => {
  try {
    console.log('post a user');
    const username = request.body.username;
    const password = request.body.password;
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      username,
      password: hashedPassword,
      firstname,
      lastname,
    });

    const createdUser = await UserModel.create(user);

    response.status(201).send(createdUser);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
};

const getUser = async (request, response) => {
  try {
    const users = await UserModel.find();
    response.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postUser, getUser };
