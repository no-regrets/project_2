var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/history", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/history.html"));
  });

  app.get("/drinks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/drinks.html"));
  });

  app.get("/createUser", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/createUser.html"));
  });

};
