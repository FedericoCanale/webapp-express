const errorHandler = (err, req, res, next) => {
    console.error('Errore catturato dal middleware:', err);

    res.status(500).json({
        error: true,
        message: 'Errore interno del server',
        details: err.message
    });
};

module.exports = errorHandler;