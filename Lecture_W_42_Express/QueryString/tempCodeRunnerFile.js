  
app.get("/search/", (req, res) => {
    /* console.log(req.query); // object
    console.log(req.query.search); // key
    let { search } = req.query;
    res.send(`<h2> my route was ${search}</h2>`) */;
  
    let { search } = req.query;
    res.send(search);
    // res.send(req.query)
    
}); 