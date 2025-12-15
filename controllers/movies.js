// Index: GET http://localhost:3000/movies : lista di tutti i film

const db = require('../database/db');
const index = (req, res) => {
    const sql = 'SELECT * FROM movies';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Errore nella query dei film:', err);
            return res.status(500).json({
                error: true,
                message: 'Errore interno del server'
            });
        }

        res.json(results);
    });
};

// Show: GET http://localhost:3000/movies/1 : dettaglio film
const show = (req, res) => {
    const { id } = req.params;

    const sqlMovie = 'SELECT * FROM movies WHERE id = ?';
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

    // 1) Recupero il film
    db.query(sqlMovie, [id], (err, movieResults) => {
        if (err) {
            console.error('Errore nella query del film:', err);
            return res.status(500).json({
                error: true,
                message: 'Errore interno del server'
            });
        }

        // Nessun film trovato = 404
        if (movieResults.length === 0) {
            return res.status(404).json({
                error: true,
                message: 'Film non trovato'
            });
        }

        const movie = movieResults[0];

        // 2) Recupero le recensioni del film
        db.query(sqlReviews, [id], (err, reviewsResults) => {
            if (err) {
                console.error('Errore nella query delle recensioni:', err);
                return res.status(500).json({
                    error: true,
                    message: 'Errore interno del server'
                });
            }

            // Risposta finale: film + reviews
            res.json({
                ...movie,
                reviews: reviewsResults
            });
        });
    });
};

const storeReview = (req, res) => {
    console.log(req.body)

    const movieId = Number(req.params.id)
    const { name, vote, text } = req.body

    // Validation per backend
    if (!name || !vote || !text) {
        return res.status(400).json({
            error: true,
            message: "Tutti i campi sono obbligatori"
        });
    }

    console.log(movieId, name, vote, text)

    const sql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)'

    db.query(sql, [movieId, name, vote, text], (err, results) => {
        if (err) return res.status(500).json({ error: true, message: err.message })

        return res.status(201).json({
            message: 'Review created',
            reviewId: results.insertId
        })
    })
}

module.exports = {
    index,
    show,
    storeReview
};