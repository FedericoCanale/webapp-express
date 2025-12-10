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


    res.json({
        message: `Qui ci saranno i dettagli del film con id ${id}`
    });
};

module.exports = {
    index,
    show
};