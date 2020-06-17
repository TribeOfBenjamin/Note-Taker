const notesData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        fs.readFile(notesData, "utf8", function (err, data) {
            if (err) throw err;
        })
        return res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {

    });
};

