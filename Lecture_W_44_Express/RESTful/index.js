const express = require("express");
const app = express();
const path = require("path"); // module of nodejs , no need to install
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // templating file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // middle ware function, to get the form data
app.use(methodOverride("_method")); // middle ware for method-overriding for post to patch

// dummy array instead of database
let comments = [
  {
    id: 0,
    username: "Ram",
    comment: "kuch bhi",
  },
  {
    id: 1,
    username: "Uday",
    comment: "Nice bhai",
  },
  {
    id: 2,
    username: "Ramesh",
    comment: "Yeh kon hai",
  },
  {
    id: 3,
    username: "Kareena",
    comment: "Yeh hai amazing",
  },
];

// root
app.get("/", (req, res) => {
  res.send("root mai aapka swagat hai");
});

// Task 1 : Display all the blogs
app.get("/blogs", (req, res) => {
  res.render("index.ejs", { comments });
});

// Task 2 : show form to make new blogs
app.get("/blog/new", (req, res) => {
  res.render("new.ejs");
});

// task 3 : Add a blog in db(array)
app.post("/blogs", (req, res) => {
  // res.send("blog added successfully");
  let { user, com } = req.body;
  // console.log(user);
  // console.log(com);

  comments.push({
    id: comments.length,
    username: user,
    comment: com,
  });

  res.redirect("/blogs"); // proper path dena padhega, / bhi
  // console.log(comments);
});

// task 4 : Show info about one blog
/* app.get('/blogs/:id', (req, res) => {
  let { id } = req.params;
  // console.log(id);
  
  let obj = comments[id];
  console.log(obj);  a
  res.render('show.ejs', { obj })
  // res.send(` ${id}`)
}) */
app.get("/blogs/:id", (req, res) => {
  let { id } = req.params; // store as string, params give string
  let foundComment = comments.find((comment) => {
    return comment.id == id;
  });
  console.log(foundComment);
  // res.send('particular grid')
  res.render("show.ejs", { foundComment });
});

// task 5 : Show edit form of one blog
// to get the form for editing the blog
app.get("/blogs/:id/edit", (req, res) => {
  let { id } = req.params;
  let foundComment = comments.find((comment) => {
    return comment.id == id;
  });
  // console.log(foundComment);
  // res.send('edit form aa gaya')
  res.render("edit.ejs", { foundComment });
});

// task 6 : actually editing the blog using patch and not put
app.patch("/blogs/:id", (req, res) => {
  let { id } = req.params;
  let foundComment = comments.find((comment) => {
    return comment.id == id;
  });

  console.log(foundComment);

  // console.log(req.body);
  let { com } = req.body;
  console.log(com);
  foundComment.comment = com; // changing already present data to newly calc data
  res.redirect("/blogs");
  // res.send("patch request send");
});


// task 7 :





app.listen(8080, () => {
  console.log("connected to port successfully.");
});
