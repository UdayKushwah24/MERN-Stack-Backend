const express = require("express");
const app = express();
const path = require('path')

 
// docs : ejs.co

// view engine ko set krdia hai taaki templates dekh paao
app.set("view enjine", "ejs");
app.set('views',path.join(__dirname, 'views'))

// root route
  app.get("/", (req, res) => {
    // res.send("Hellow")
    // res.render('/views/index'); ===
    res.render("index.ejs");
});




// mai random.ejs file ke liye route bana lu
app.get('/random', (req, res) => {

    // logic likhne ke baad ans ko template ke andar bhej dunga

    let number = Math.floor(Math.random() * 100);
    res.render('random.ejs', {number})
})

const todos = ['go to gym', 'go to club', 'drink water']
app.get("/todo/", (req, res) => {
 
  res.render("todo.ejs", { todos });
});



app.listen(8080, () => {
    console.log("Connected to port 8080 successfully");
});