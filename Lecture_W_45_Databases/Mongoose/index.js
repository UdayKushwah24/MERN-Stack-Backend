// docs : https://mongoosejs.com/

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/nobita")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(" Error! while connecting DB");
    console.log(err);
  });

// schema (blue-print) ========================================
/* const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
}); */
const movieSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  year: Number,
  isWatched: Boolean,
});

// model (JS classes) --> collection for db
const Movie = mongoose.model("Movie", movieSchema); // js class
// console.log(Movie);







// making a new object
/* let ironman = new Movie({
  // creates a new object using model === js class
  name: "Ironman",
  rating: 8,
  year: 2015,
  isWatched:true  
});

console.log(ironman);  // db ke ander us object ko store kar dega permanently
ironman.save() // js method ki bajah se alag se save karna padha
 */

 
// or-------------------------------------------------------

/* Movie.create({
  // creates a new object using model === js class
  name: "baji rao",
  rating: 9,
  year: 2000,
  isWatched: false
}); */

// or-------------------------------------------------------

// Movie.insertOne({
//   // creates a new object using model === js class
//   name: "India",
//   rating: 10,
//   year: 1990,
//   isWatched: true
// });