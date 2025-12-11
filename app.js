const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000;
const db = require('./database/db');
app.use(express.static("public"));
app.use(express.json());

// Rotta di test
app.get("/", (req, res) => {
    res.send("Homepage del blog di film");
});

// Router dei film
const moviesRouter = require('./routers/movies');
app.use('/movies', moviesRouter);

// Middleware 404 
const notFound = require('./middlewares/notFound');
app.use(notFound);

// Middleware gestione errori 
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);
//Middleware cors
app.use(cors({
    origin: `http://localhost:5173`
}));
// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});