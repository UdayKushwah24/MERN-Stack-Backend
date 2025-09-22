const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// dummy array instead of database
let comments = [
  {
    // id: 0,
    id: uuid(),
    username: "Ram",
    comment: "kuch bhi",
  },
  {
    // id: 1,
    id: uuid(),
    username: "Uday",
    comment: "Nice bhai",
  },
  {
    // id: 2,
    id: uuid(),
    username: "Ramesh",
    comment: "Yeh kon hai",
  },
  {
    // id: 3,
    id: uuid(),
    username: "Kareena",
    comment: "Yeh hai amazing",
  },
];

// task 1
app.get("/blogs", (req, res) => {
  res.render("index.ejs", { comments });
});

// task 2
app.get("/blog/new", (req, res) => {
  res.render("new.ejs");
});

// task 3
app.post("/blogs", (req, res) => {
  //   console.log(req.body);
  let { username, comment } = req.body;
  //   console.log(username);
  //   console.log(comment);
  comments.push({
    id:  uuid(),
    username: username,
    comment: comment,
  });
  res.redirect("/blogs");
});

// task 4
app.get("/blogs/:id", (req, res) => {
  let { id } = req.params;
  // console.log(id);
  // console.log(comments[id]);

  let foundComment = comments.find((com) => {
    return com.id === id;
  });
  // console.log(foundComment);
  // res.send('hl')
  res.render("show.ejs", { foundComment });
});

// task-5
app.get("/blogs/:id/edit", (req, res) => {
  let { id } = req.params;
  let foundComment = comments.find((comment) => {
    return comment.id === id;
  });
  // console.log(foundComment);
  res.render("edit.ejs", { foundComment });
});

// task-6
app.patch("/blogs/:id", (req, res) => {
  let { id } = req.params;
  let foundComment = comments.find((comment) => {
    return comment.id === id;
  });
  // console.log(foundComment);

  // console.log((req.body));
  let { com } = req.body;
  // console.log(com);
  // res.send("patch request send successfully")

  comments[id].comment = com;
  res.redirect("/blogs");
  // res.redirect('/blogs')
});

// task 7 : delete a particular blog and redirect it
app.delete("/blogs/:id", (req, res) => {
  let { id } = req.params;
  comments = comments.filter((comment) => {
    return comment.id !== id;
  });

  res.redirect("/blogs");
});

app.listen(8080, () => {
  console.log("Connected to port 8080 successfully");
});
