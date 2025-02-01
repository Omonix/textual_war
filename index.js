const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World !");
});
app.use("/game", require("./roots/game.js"));
app.listen(PORT, () => {
  console.log(`Starting on port ${PORT}`);
});
