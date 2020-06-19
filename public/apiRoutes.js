const fs = require("fs");

const notesData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        // Commented out below used to be here; fs package not needed?
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {
        notesData.push(req.body);

        // Below is intended to clear note upon save BUT doesn't
        // $(".note-title").val("");
        // $(".note-textarea").val("");

        return notesData;
        // Is this ^^^ what is meant by returning the new note to the client?
        // res.json(true); <--What is this doing in Hot Restaurant?
    });

    // MY ATTEMPT AT DELETE
    app.delete("/api/notes/:id", function(req, res) {
        let deletedNote = req.params.id;
        console.log(deletedNote);
    })
};

// fs.readFile(notesData, "utf8", function (err, data) {
//     if (err) throw err;
// })
// return