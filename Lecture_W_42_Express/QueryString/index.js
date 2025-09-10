const express = require("express");
const app = express()
 

/* 
app.get("/r/:subreddit", (req, res) => {
  //  console.log(req);
   
  // console.log(req.params); // object
  // console.log(req.params.subreddit);
  let { subreddit } = req.params;
  res.send(`<h2> my route was ${subreddit}</h2>`);
}); 
*/





  
app.get("/search/", (req, res) => {
    /* console.log(req.query); // object
    console.log(req.query.search); // key
    let { search } = req.query;
    res.send(`<h2> my route was ${search}</h2>`) */;
  
    let { search } = req.query;
    res.send(search);
    // res.send(req.query)
    
}); 




app.listen(8080, () => {
    console.log("Connected to port 8080 successfully");
})