const Movie = require("./model");
const TVShow = require("./model");

exports.createMovie = async (movieObj) => {
  try {
    console.log(movieObj);
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);

  } catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.readMovie = async (movieObj) => {
  try {
    const results = await Movie.find()
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.updateMovie = async (movieObj) => {
  try {
    if (movieObj.title) {
      console.log("Movie has been updated")
      await Movie.updateOne({title: movieObj.title}, {$set: {title: movieObj.newTitle}});
      const results2 = await Movie.find({title: movieObj.newTitle});
      console.log(results2);
    }
    //--------------------
    else if (movieObj.actor) {
      console.log("Actor has been updated")
      await Movie.updateOne({actor: movieObj.actor}, {$set: {actor: movieObj.newActor}});
      const results2 = await Movie.find({actor: movieObj.newActor});
      console.log(results2);
    }
    //--------------------
    else if (movieObj.director) {
      console.log("Director has been updated")
      await Movie.updateOne({director: movieObj.director}, {$set: {director: movieObj.newDirector}});
      const results2 = await Movie.find({director: movieObj.newDirector});
      console.log(results2);
    }
    //--------------------
    else if (movieObj.rating) {
      console.log("Rating has been updated")
      await Movie.updateOne({rating: movieObj.rating}, {$set: {rating: movieObj.newRating}});
      const results2 = await Movie.find({rating: movieObj.newRating});
      console.log(results2);
    }
    //--------------------
    else if (movieObj.year) {
      console.log("Year has been updated")
      await Movie.updateOne({year: movieObj.year}, {$set: {year: movieObj.newYear}});
      const results2 = await Movie.find({year: movieObj.newYear});
      console.log(results2);
    }
    //--------------------
    else {
      console.log("Specify (--title, --actor, --director, --rating, --year) then (--newTitle, --newActor, --newDirector, --newRating, --newYear")
    }
    //--------------------
  }
  catch (error) {
    console.log(error);
  }
};
//----------------------------------------------------------------------------------------------------
exports.deleteMovie = async (movieObj) => {
  try {
    if (movieObj.title) {
      const delItem = await Movie.deleteOne({title: movieObj.title});
      if (delItem.deletedCount === 1) {
        console.log("Movie deleted");
      } 
      else {
        console.log("Movie not found")
      }
    } 
    //--------------------
    else if (movieObj.actor) {
      const delItem = await Movie.deleteOne({actor: movieObj.actor});
      if (delItem.deletedCount === 1) {
        console.log("Actor deleted");
      } 
      else {
        console.log("Actor not found")
      }
    }
    //--------------------
      if (movieObj.director) {
        const delItem = await Movie.deleteOne({director: movieObj.director});
        if (delItem.deletedCount === 1) {
          console.log("Director deleted");
        } 
        else {
          console.log("Director not found")
        }
      }
    //--------------------
      else if (movieObj.rating) {
        const delItem = await Movie.deleteOne({rating: movieObj.rating});
        if (delItem.deletedCount === 1) {
          console.log("Rating deleted");
        } 
        else {
          console.log("Rating not found")
        }
      }
    //--------------------
      else if (movieObj.year) {
        const delItem = await Movie.deleteOne({year: movieObj.year});
        if (delItem.deletedCount === 1) {
          console.log("Year deleted");
        } 
        else {
          console.log("Year not found")
        }
      } 
    //--------------------
    else {
      console.log("Specify (--title, --actor, --director, --rating, --year)")
    }
  }
  catch (error) {
    console.log(error);
  }
}
//----------------------------------------------------------------------------------------------------
exports.findMovie = async (movieObj) => {
  try {
    const results = await Movie.findOne(this)
    console.log(results);
  }
  catch (error) {
    console.log(error);
  }
};
//#####################################################################################################

// exports.createMovie = async (movieObj) => {
//   try {
//     console.log(movieObj);
//     const newMovie = await Movie.create(movieObj);
//     console.log(newMovie);

//   } catch (error) {
//     console.log(error);
//   }
// };

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