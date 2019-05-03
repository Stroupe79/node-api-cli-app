const axios = require('axios');
var Spotify = require('node-spotify-api');
const keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({ 
//     id: "f5aa6705a3e74aaf9ab23e8003fda31c",
//     secret: "bd55104f9a8a4859ba58604d69d0a326"});
const search = process.argv[2];
const inquirer = require('inquirer');


inquirer
  .prompt([
    {
        type: "input",
        message: "Would you like to search for a concert, movie, or event?",
        name: "search"
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  });

require("dotenv").config();
console.log(process.argv)
// switch 
musicApi()

// omdb key = e5d832e9
// spotify client id = f5aa6705a3e74aaf9ab23e8003fda31c
// tm key = rrFQUi7azSu6BIs8pNUwk9tDZHSTv8YY
// https://www.npmjs.com/package/node-spotify-api

// search requirements: 
// * `search-concerts`
    //      * Name of the venue

    //  * Venue location

    //  * Date of the Event (use date-fns to format this as "MM/DD/YYYY")


// * `search-songs`
    // * Artist(s)

    // * The song's name

    // * A preview link of the song from Spotify

    // * The album that the song is from

    // * If no song is provided then your program will default to "The Sign" by Ace of Base.

// * `search-movies`
    //  * Title of the movie.
    // * Year the movie came out.
    // * IMDB Rating of the movie.
    // * Rotten Tomatoes Rating of the movie.
    // * Country where the movie was produced.
    // * Language of the movie.
    // * Plot of the movie.
    // * Actors in the movie.
    // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    //  * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

// * `feeling-lucky`
    // * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

    // * It should run `search-songs` for "I Want it That Way," as follows the text in `random.txt`.

    // * Edit the text in random.txt to test out the feature for search-movies and search-concerts.

function omdb(){
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9";
    axios.get(queryUrl).then(
        function (response){
            console.log(response)
            console.log("Release Year: " + response.data.Year);
        }
    )
}

function musicApi(){
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data); 
      });


    // var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9";
    // axios.get(queryUrl).then(
    //     function (response){
    //         console.log(response)
    //         console.log("Release Year: " + response.data.Year);
    //     }
    // )
    // var spotify = new Spotify({
    //     id: <your spotify client id>,
    //     secret: <your spotify client secret>
    //   });
       
    //   spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    //     if (err) {
    //       return console.log('Error occurred: ' + err);
    //     }
       
    //   console.log(data); 
    //   });
}


function tm(){
    const tmKey="&apikey=rrFQUi7azSu6BIs8pNUwk9tDZHSTv8YY"
    var queryUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=1&keyword=" + search + tmKey;
    console.log(queryUrl)
    axios.get(queryUrl).then(
        function (response){
            console.log(response)
            console.log("Event Name: " + response._embedded.events[0].name);
            console.log("Start Date: " + response._embedded.events[0].dates.start.localTime)
            console.log("Venue: " + response._embedded.events[0]._embedded.venues[0].name)
        }
    )
}

