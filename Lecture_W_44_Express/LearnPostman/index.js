const express = require("express");
const app = express();
const path = require("path");
const { hrtime } = require("process");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // templating file

app.use(express.static(path.join(__dirname, "public"))); // acessing static file
app.use(express.urlencoded({ extended: true })); // middle ware function, to get the form data
app.use(express.json()); // malware function for json data

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/user", (req, res) => {
  console.log(req.query);

  let { username, age } = req.query;
  console.log(username);
  console.log(age);
  // res.send(username);
});

// post request ko handle karna
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("post method ke through");

  // destructure the object
  // let { username, age } = req.body;
  // res.send(username)
});

app.listen(8080, (req, res) => {
  console.log("connected to port 8080 successfully");
});
