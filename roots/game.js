const express = require("express");
const root = express.Router();

root.get("/", (req, res) => {
  res.send("Hello game !");
});
root.get("/:x/:y", (req, res) => {
  x_pos = req.params.x;
  y_pos = req.params.y;
  if (`${parseInt(x_pos)}` !== x_pos || `${parseInt(y_pos)}` !== y_pos) {
    res.status("500").send("Error : Invalid position");
  } else {
    res.send(`${x_pos}, ${y_pos}`);
  }
});

module.exports = root;
