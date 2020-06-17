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


// Router
require("./apiRoutes")(app);
require("./htmlRoutes")(app);


// Server Begins Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});