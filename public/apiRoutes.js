const fs = require("fs");

const notesData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        // Commented out below used to be here; fs package not needed?
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {
        notesData.push(req.body);
        //res.json(true); <--What is this doing in Hot Restaurant?
    });
};

// fs.readFile(notesData, "utf8", function (err, data) {
//     if (err) throw err;
// })
// return 