const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

// Rotta index: GET http://localhost:3000/movies
router.get('/', moviesController.index);

// Rotta show: GET http://localhost:3000/movies/1
router.get('/:id', moviesController.show);

// Rotta post: POST http://localhost:3000/movies/1/reviews
router.post('/:id/reviews', moviesController.storeReview)

module.exports = router;