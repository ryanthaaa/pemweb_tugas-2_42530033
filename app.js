const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const filmController = require('./controllers/film.controller');
const filmRoutes = require('./routes/film.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', filmController.getAllFilms);

app.use('/films', filmRoutes);

app.use((req, res) => {
    res.status(404).render('pages/404');
});

app.listen(PORT, () => {
    console.log(`SERVER berjalan di http://localhost:${PORT}`);
});