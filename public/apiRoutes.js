const fs = require("fs");
const path = require("path");

const notesData = require("../db/db.json");

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {

        let newNote = req.body;
        let noteId = Math.random();
        newNote.id = noteId;

        notesData.push(newNote);

        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData),
            err => {
                if (err) throw err;
            }
        );

        // Below is intended to clear note upon save BUT doesn't
        // $(".note-title").val("");
        // $(".note-textarea").val("");

        res.json(newNote);
    });

    // MY ATTEMPT AT DELETE
    app.delete("/api/notes/:id", function (req, res) {
        let deletedNote = req.params.id;

        function deleteFunction(note) {

            for (let i = 0; i < notesData.length; i++) {
                if (notesData[i].id === deletedNote) {
                    notesData[i].splice(i, 1);
                }
            }
        }
        deleteFunction();
        res.json(notesData);
    });
};