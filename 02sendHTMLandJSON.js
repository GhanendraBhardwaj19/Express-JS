const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world from home side..!</h1>");
});

app.get("/contact", (req, res) => {
  // you can use res.json() as well
  res.send([
    {
      id: 1,
      name: "Ghanendra",
    },
    {
      id: 1,
      name: "Ghanendra",
    },
  ]);
});

app.listen(8000, () => {
  console.log("Listening port no 8000.");
});
