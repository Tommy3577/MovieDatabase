const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
//--------------------  
  actor: {
    type: String,
    default: "Not specified",
  },
//-------------------- 
  director: {
  type: String,
  default: "Not specified",
},
//-------------------- 
  rating: {
    type: Number,
    default: "",
},
//--------------------
  year: {
    type: Number,
    default: "",
},
//-------------------- 
});
//----------------------------------------------------------------------------------------------------  
const TVSchema = new mongoose.Schema({
  titleTV: {
    type: String,
    unique: true,
    required: true,
  },
//-------------------- 
  actorTV: {
    type: String,
    default: "Not Specified"
  }
//--------------------
});
//----------------------------------------------------------------------------------------------------  
const TVShow = mongoose.model("TVShows", TVSchema);
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie, TVShow;
