const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');

// Rotta index: GET http://localhost:3000/movies
router.get('/', moviesController.index);

// Rotta show: GET http://localhost:3000/movies/1
router.get('/:id', moviesController.show);

module.exports = router;