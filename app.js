const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const translateRouter = require('./route/translate.route');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
app.use(cors());
require('dotenv').config();
const port = process.env.PORT || 3000;

// middleware

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// routes
app.use('/api/v1/translate', translateRouter);

app.get('/', (req, res) => {
  res.render('index');
});

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
