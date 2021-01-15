const express = require('express');

const router = express.Router();
const {
    addFood,
    getAllFood
} = require('../controllers/food');

router.route('/')
      .post(addFood)
      .get(getAllFood);

module.exports = router;
