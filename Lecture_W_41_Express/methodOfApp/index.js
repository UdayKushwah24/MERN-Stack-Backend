const express = require("express"); // returns a function
const app = express(); // it returns an entire new object

// app --> an object {instance to your entire application}

// console.log(app);
// console.log(express);




// adding app.use
// wihtout path : for all incoming requests
app.use((req, res) => {  // call back function // middle ware function
    // console.log(req);
    // console.log(res);
    // console.log("You made a request ...");
    res.send('<h1>Hello I am sending data</h1>')
})  

// with path :- optional(for specific path only and not in other cases)
// app.use('/middleware',(req, res) => {
//     // call back function // middle ware function
//     // console.log(req);
//     // console.log(res);
//     console.log("You made a request specific path middleware");
//     res.send("<h1>Hello I am sending middleware function data</h1>");
// });  








// ask server to listen your requests
app.listen(8080, () => {
    console.log("Server connected at port 8080");
});
 