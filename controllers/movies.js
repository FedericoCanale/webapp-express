// Rotta index: GET http://localhost:3000/movies : lista di tutti i film
const index = (req, res) => {
    res.json({
        message: 'Qui ci sarà la lista dei film'
    });
};

// Rotta show: GET http://localhost:3000/movies/1 : dettaglio film
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