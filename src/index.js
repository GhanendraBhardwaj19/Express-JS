const express = require("express");
const path = require("path");
const app = express();

// console.log(__dirname);

const staticPath = path.join(__dirname, "../03websiteEXp");

// console.log(__dirname);

// builtin middleware

// app.use(express.static(staticPath));

// to set the view

app.set("view engine", "hbs");

const viewsPath = path.join(__dirname, "../template");

// template engine route
app.set("views", viewsPath);
app.get("/", (req, res) => {
  res.render("index.hbs", {
    name: "Ghanendra Bhardwaj",
  });
});

app.get("/", (req, res) => {
  res.send("Hello world from home side..!");
});

app.get("/contact", (req, res) => {
  res.send("Hello world from contact side..!");
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "oops!page not found.",
  });
});

app.listen(8001, () => {
  console.log("Listening port no 8000.");
});
