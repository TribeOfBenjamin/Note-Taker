// Dependencies
const express = require("express");
const path = require("path");


// Express App
const app = express();
const PORT = process.env.PORT || 3000;


// Express App's Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Router
require("./public/apiRoutes")(app);
require("./public/htmlRoutes")(app);


// Server Begins Listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});