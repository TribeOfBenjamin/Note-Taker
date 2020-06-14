// Dependencies
const fs = require("fs");
const express = require("express");
const path = require("path");

// Express App
const app = express();
const PORT = 3000;

// Express App's Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data (?)

const notesData = require("../db/db.json");

// Routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", function(req, res) {
//    fs.readFile(notesData, "utf8", function(err, data) {
//        if (err) throw err;
//    })
    return res.json(notesData);
})

// app.post("/api/notes", function(req, res) {

// })

// Server Begins Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});