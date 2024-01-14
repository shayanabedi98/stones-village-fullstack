const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
});

app.get("/inventory", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
});

app.use(express.static(path.join(__dirname, "/client/dist")));

app.listen(port, () => {
  console.log("Running on Port:", port);
});
