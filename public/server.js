// Dependencies
const express = require("express");
const path = path("path");

// Express App
const app = express();
const PORT = 3000;

// Express App's Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data (?)



// Routes



// Server Begins Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});