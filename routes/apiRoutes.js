const path = require("path");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes/", function (req, res) {
    res.json("../db/db.json");
  });
};
