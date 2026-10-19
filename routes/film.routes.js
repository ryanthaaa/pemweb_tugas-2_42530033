const express = require('express');
const router = express.Router();

const filmController = require('../controllers/film.controller');

router.get('/', filmController.getAllFilms);

router.get('/:id', filmController.getFilmById);

module.exports = router;