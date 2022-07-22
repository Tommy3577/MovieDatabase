const TVShow = require("./model");

exports.createTV = async (TVObj) => {
  try {
    console.log(TVObj);
    const newTV = await TVShow.create(TVObj);
    console.log(newTV);

  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.readTV = async (TVObj) => {
  try {
    const results = await TVShow.find()
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.updateTV = async (TVObj) => {
  try {
    if (TVObj.title) {
      console.log("Movie has been updated")
      await TVShow.updateOne({titleTV: TVObj.titleTV}, {$set: {titleTV: TVObj.newTitleTV}});
      const results2 = await TVShow.find({titleTV: TVObj.newTitleTV});
      console.log(results2);
    }
    //--------------------
    else if (TVObj.actor) {
      console.log("Actor has been updated")
      await TVShow.updateOne({actorTV: TVObj.actorTV}, {$set: {actorTV: TVObj.newActorTV}});
      const results2 = await TVShow.find({actorTV: TVObj.newActorTV});
      console.log(results2);
    }
    //--------------------
    else {
      console.log("Specify (--titleTV, --actorTV) then (--newTitleTV, --newActorTV")
    }
    //--------------------
  }
  catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteTV = async (TVObj) => {
  try {
    if (TVObj.title) {
      const delItem = await TVShow.deleteOne({titleTV: TVObj.titleTV});
      if (delItem.deletedCount === 1) {
        console.log("Movie deleted");
      } 
      else {
        console.log("Movie not found")
      }
    } 
    //--------------------
    else if (TVObj.actor) {
      const delItem = await TVShow.deleteOne({actorTV: TVObj.actorTV});
      if (delItem.deletedCount === 1) {
        console.log("Actor deleted");
      } 
      else {
        console.log("Actor not found")
      }
    }
    //--------------------
  }
  catch (error) {
    console.log(error);
  }
}
//----------------------------------------------------------------------------------------------------
exports.findTV = async (TVObj) => {
  try {
    const results = await TVShow.findOne(this)
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};