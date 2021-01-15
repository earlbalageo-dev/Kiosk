const express = require('express');

const router = express.Router();
const {
    addDrink,
    getAllDrink
} = require('../controllers/drink');

router.route('/')
      .post(addDrink)
      .get(getAllDrink);

module.exports = router;
