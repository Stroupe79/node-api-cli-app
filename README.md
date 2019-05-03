

# API Search CLI App a.k.a. LIRI

## What does this do?

This cli app will ask you for a specific search type, and after you choose what type of search you'd like to perform you will then be asked for more specifics. 

The search types are as follows:

* Music
* Movies
* Events

Depending on the selected type, the app will then go query the specific api and return the requested data. The APIs in use are:

* Spotify
* OMDB
* Ticketmaster



## Prerequisites

You must run "npm install" prior to running in order to get the required packages. This app uses the following packages:

* Axios
* node-spotify-api
* inquirer

You also must provide you're own .env file configured with Spotify keys as follows:
 
```
#Spotify API keys

SPOTIFY_ID= your_id_goes_here
SPOTIFY_SECRET= your_secret_goes_here
```


## Running the application

From the CLI, in the folder containing the app.js file, simply run the following:

`node app`



## Examples

The app will return data that looks like below:

Music:

![Music Search] (music.gif)

Movie:

![Movie Search] (movie.gif)

Event:

![Events Search] (event.gif)




## Authored By:
### Chris Stroupe