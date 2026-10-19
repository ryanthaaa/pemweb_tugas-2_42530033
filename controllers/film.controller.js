const films = require('../models/film.model')

function getAllFilms(req, res) {
    const genre = req.query.genre;
    let filteredFilms = films;

    if (genre) {
        filteredFilms = films.filter((film) => {
            return film.genre.toLowerCase() == genre.toLowerCase();
        })
    }

    // res.json(films)

    res.render('pages/films', {
        films: filteredFilms,
        selectedGenre: genre || ''
    })
}

function getFilmById(req, res) {
    const id = Number(req.params.id);

    const film = films.find((film) => film.id == id);

    if (!film) {
        return res.status(404).render('pages/404');
    }

    res.render('pages/detail-film', {
        film: film
    })
}

module.exports = {
    getAllFilms,
    getFilmById
}