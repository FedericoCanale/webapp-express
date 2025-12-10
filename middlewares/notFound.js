const notFound = (req, res, next) => {
    res.status(404).json({
        error: true,
        message: 'Risorsa non trovata'
    });
};

module.exports = notFound;