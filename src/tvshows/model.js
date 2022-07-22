const mongoose = require("mongoose");

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

module.exports = TVShow;
