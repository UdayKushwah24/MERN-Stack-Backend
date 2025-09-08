const express = require("express");
const app = express();


// app.get("/", (req, res) => {
//   res.send("/ rout hai");
// });
// app.get("/r/cat", (req, res) => {
//   res.send("<h1>cat rout hai</h1>");
// });
// app.get("/r/dog", (req, res) => {
//   res.send("<h1>dog rout hai</h1>");
// });
// app.get("/r/banana", (req, res) => {
//   res.send("<h1>banana rout hai</h1>");
// });
// infinite routes banane padh jayenge




// subredits
app.get('/r/:subreddit', (req, res) => {
  // console.log(req.params); // object
  // console.log(req.params.subreddit);
  let { subreddit } = req.params;
  res.send(`<h2> my route was ${subreddit}</h2>`)
  
})


app.listen(8080, () => {
  console.log("connected to port 8080 successfully..");
});
