require("./db/connection");
const yargs = require("yargs");
const mongoose = require("mongoose");
const { createMovie, readMovie, updateMovie, deleteMovie, findMovie } = require("./movie/functions");
const { createTV, readTV, updateTV, deleteTV, findTV } = require("./tvshows/functions");

// NOTE --something will be using the movie model. --somethingTV will be using the TV model. TV should also be a suffix
// process.exit();

const app = async (yargsObj) => {
//----------------------------------------------------------------------------------------------------
  if (yargsObj.create) {
    await createMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating, year: yargsObj.year });
    //add movie to DB
    // title, actor, director, rating, year
  }
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.createTV) {
    await createTV({ titleTV: yargsObj.titleTV, actorTV: yargsObj.actorTV });
    //add tv show to DB
    // title, actor
  }
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.read) {
    await readMovie();
    //list all movies from DB
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.readTV) {
    await readTV();
    //list all tv shows from DB
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.update) {
    await updateMovie({ title: yargsObj.title, newTitle: yargsObj.newTitle, actor: yargsObj.actor, newActor: yargsObj.newActor, director: yargsObj.director, newDirector: yargsObj.newDirector, rating: yargsObj.rating, newRating: yargsObj.newRating, year: yargsObj.year, newYear: yargsObj.newYear});
    //update one movie from DB
    // title, actor, director, rating, year
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.updateTV) {
    await updateTV({ titleTV: yargsObj.titleTV, newTitleTV: yargsObj.newTitleTV, actorTV: yargsObj.actorTV, newActorTV: yargsObj.newActorTV});
    //Update one TV show from DB
    //title, actor
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.delete) {
    await deleteMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating, year: yargsObj.year });
    //Delete one movie from DB
    //title, actor, director, rating, year
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.deleteTV) {
    await deleteTV({ titleTV: yargsObj.titleTV, actorTV: yargsObj.actorTV});
    //Delete one TV show from DB
    // title, actor
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.find) {
    //find a specific thing
    await findMovie({ title: yargsObj.title, actor: yargsObj.actor, director: yargsObj.director, rating: yargsObj.rating, year: yargsObj.year });
    // title, actor, director, rating, year
  } 
//----------------------------------------------------------------------------------------------------
  else if (yargsObj.findTV) {
    //find a specific thing
    await findTV({ titleTV: yargsObj.titleTV, actorTV: yargsObj.actorTV });
    // title, actor
  } 
//----------------------------------------------------------------------------------------------------
  else {
    console.log("Incorrect command");
  }
//----------------------------------------------------------------------------------------------------
  await mongoose.disconnect();
};
//----------------------------------------------------------------------------------------------------

// node src/app --create --title "Something"     
app(yargs.argv);
