let express = require("express");
let app = express();
exports.app = app;

app.get("/", (req, res) => {
  console.log("Hello World!");
});

module.exports = app;
