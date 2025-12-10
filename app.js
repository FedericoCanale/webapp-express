const express = require('express');
const app = express();
const port = 3000;
const db = require('./database/db');
app.use(express.static("public"));
app.use(express.json());

// Rotta di test
app.get("/", (req, res) => {
    res.send("Homepage del blog di film");
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});