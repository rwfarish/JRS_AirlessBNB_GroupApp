const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { userRoutes } = require('./routes/userRoutes');
const { listingRoutes } = require('./routes/listingRoutes');
const { reservationRoutes } = require('./routes/reservationRoutes');
const { viewRoutes } = require('./routes/viewRoutes');
const { authRoutes } = require('./routes/authRoutes');

const app = express();
app.use(express.json());
app.use(cors());
const un = process.env.user;
const pw = process.env.password;
mongoose.connect(
  `mongodb+srv://${un}:${pw}@cluster0.kzid4.mongodb.net/airbnbDb?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

userRoutes(app);
listingRoutes(app);
reservationRoutes(app);
viewRoutes(app);
authRoutes(app);

app.listen(4000, () => console.log('app is listening on 4000'));
