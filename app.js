const axios = require("axios");
const search = process.argv[2];
console.log(process.argv)
// switch 
omdb()

// omdb key = e5d832e9
// spotify client id = f5aa6705a3e74aaf9ab23e8003fda31c
// tm key = rrFQUi7azSu6BIs8pNUwk9tDZHSTv8YY


function omdb(){
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9";
    axios.get(queryUrl).then(
        function (response){
            console.log(response)
            console.log("Release Year: " + response.data.Year);
        }
    )
}

function spotify(){
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9";
    axios.get(queryUrl).then(
        function (response){
            console.log(response)
            console.log("Release Year: " + response.data.Year);
        }
    )
}

function tm(){
    var queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=e5d832e9";
    axios.get(queryUrl).then(
        function (response){
            console.log(response)
            console.log("Release Year: " + response.data.Year);
        }
    )
}

