const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router.get('/', tourController.getTours);
router.post('/', tourController.createTour);

module.exports = router;
