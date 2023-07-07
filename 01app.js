const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from home side..!");
});

app.get("/contact", (req, res) => {
  res.send("Hello world from contact side..!");
});

app.listen(8000, () => {
  console.log("Listening port no 8000.");
});
