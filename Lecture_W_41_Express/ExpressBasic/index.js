const express = require("express"); // returns a function
const app = express(); // it returns an entire new object

// app --> an object {instance to your entire application}

// console.log(app);
// console.log(express);


// ask server to listen your requests
/* 
app.listen(8080, () => {
  console.log("Server connected at port 8080");
}); 
*/


app.listen(8080);