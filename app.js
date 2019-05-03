require("dotenv").config();
const axios = require('axios');
var Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
        type: "list",
        message: "Would you like to search for a concert, movie, or event?",
        choices: ["Music", "Movie", "Event"],
        name: "type"
      },
    {
        type: "search",
        message: "What exactly are you searching for?",
        name: "search"
    }
  ])
  .then(function (response) {
      if (response.type === "Movie"){
        omdb(response.search)
      } else if (response.type === "Event"){
        tm(response.search)
      } else musicApi(response.search)
  });


function omdb(search){
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9&tomatoes=true";
    axios.get(queryUrl).then(
        function (response){
            // console.log(response)
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    )
}

function musicApi(search){
    spotify.search({ type: 'track', query: search, limit: 1 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
    //   console.log(data.tracks.items[0]); 
      console.log("Artist: " + data.tracks.items[0].artists[0].name); 
      console.log("Name: " + data.tracks.items[0].name); 
    console.log("Album: " + data.tracks.items[0].album.name); 
      console.log("Preview Link: " + data.tracks.items[0].preview_url); 
      });
}


function tm(search){
    const tmKey="&apikey=rrFQUi7azSu6BIs8pNUwk9tDZHSTv8YY"
    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=" + search + tmKey;
    axios.get(queryUrl).then(
        function (response){
            // console.log("Venue: " + response._embedded.venues[0].name)
            console.log("Event Name: " + response.data._embedded.events[0].name);
            console.log("Venue: " + response.data._embedded.events[0]._embedded.venues[0].name)
            console.log("Venue City: " + response.data._embedded.events[0]._embedded.venues[0].city.name)
            console.log("Start Date: " + response.data._embedded.events[0].dates.start.localTime)
        }
    )
}

