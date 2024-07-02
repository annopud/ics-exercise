const { createCustomError } = require('../errors/custom-error');
const { englishAlienTranslator } = require('../service/translate.service');

const getAll = (req, res) => {
  res.send('Hello World!/api/v1/translate controller');
};

const translateBetweenEnglishAndAlien = (req, res) => {
  if (!req.body || !req.body.message) {
    return res
      .status(400)
      .json({
        message:
          'Please provide a valid input | UBCO Qmeeaatee qsoowiifee aa waamiif iipquuv5',
      });
  }
  res.send(englishAlienTranslator(req.body));
};

module.exports = {
  getAll,
  translateBetweenEnglishAndAlien,
};
