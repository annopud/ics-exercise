const express = require('express');
const app = express();

const cors = require('cors');
const translateRouter = require('./route/translate.route');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/translate', translateRouter);

// error handling middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
