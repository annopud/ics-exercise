const express = require("express");
const router = express.Router();

const {
  getAll,
  translateBetweenEnglishAndAlien,
} = require("../controller/translate.controller");

router.route("/").get(getAll);
router.route("/english-alien").post(translateBetweenEnglishAndAlien);

module.exports = router;
