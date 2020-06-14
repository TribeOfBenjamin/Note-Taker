// Dependencies
const express = require("express");
const path = require("path");

// Express App
const app = express();
const PORT = 3000;

// Express App's Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data (?)



// Routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

// Server Begins Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});