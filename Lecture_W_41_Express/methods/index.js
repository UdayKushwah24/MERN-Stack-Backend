const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log(req);
//     res.send('<h1>hellow</h1>')
// })

// get method are :
// '/' is default path ||  rort -> /
app.get("/", (req, res) => {
  // path, callback, [cb....]
  res.send('<h1> ye mera "/" path hai</h1>');
});
app.get("/cat", (req, res) => {
  // path, callback, [cb....]
  res.send('<h1> ye mera "/cat" path hai</h1>');
});
app.get("/dog", (req, res) => {
  // path, callback, [cb....]
  res.send('<h1> ye mera "/dog" path hai</h1>');
});
app.get("/orange", (req, res) => {
  // path, callback, [cb....]
  res.send('<h1> ye mera "/orange" path hai</h1>');
});
app.get("/watermelon", (req, res) => {
  // path, callback, [cb....]
  res.send("<h1> water melon laal hai</h1>");
});



// bad request ko handle karna, always add the last
/* app.use('*', (req, res) => {
  res.send("you hit a Bad request");
});
 */



app.listen(8080, () => {
  console.log("connected to 8080 port successfully");
});
