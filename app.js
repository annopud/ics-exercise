const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const cors = require('cors');
const translateRouter = require('./route/translate.route');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(cors());

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
