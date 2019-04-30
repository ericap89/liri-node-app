//Add code to read and set any environment variables with the dotenv package:
//require("dotenv").config();

//Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");

//You should then be able to access your keys information like so
//var spotify = new Spotify(keys.spotify);



// let request = require('request')
const moment =  require('moment')
const axios = require('axios')
const [, , ...movieArr] = process.argv
const movie = movieArr.join(' ')
const [, , ...artistArr] = process.argv
const artist = artistArr.join(' ')
// let request = require('request')
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

function userCommand(userInput, userQuery){

switch(userInput) {
        case "spotify-this":
            spotifyThisSong();
            break;

        case "movie-this":
            movieThis();
            break;

        case "concert-this":
            concertThis();
            break;

        case "do-what-it-says":
            doWhatItSays(userQuery);
            break;
    
        default:
    }
}
userCommand(userInput, userQuery);



// function concertThis() {
// console.log(`Finding ${userQuery}'s next gig!`);

// axios.get(`https://rest.bandsintown.com/artists/ + ${artist} + /events?app_id=codingbootcamp`) 
//         .then(({ data : {lineup , venue_name , venue_city , venue_country} }) => {
//             console.log(`Here's what I found...
//                     Artist: ${lineup}
//                     Venue: ${venue_name}
//                     Location: ${venue_city}, ${venue_country}
//                 `)
//         });
//                 let concertDate = moment(artist[i].datetime).format("MM/DD/YYYY hh:00 A");
//                 console.log(`Date & Time:${concertDate}`);
         







function movieThis() {
    console.log(`Searching for ${userQuery}`);
}
    axios.get(`http://www.omdbapi.com/?t=${movie}&apikey=d5c830a1`)
        .then(({ data : {Title, Year, imdbRating , Production, Language , Plot, Actors} }) => {console.log(`
            Title:${Title}
            Year:${Year}
            imbdRating:${imdbRating}
            Production:${Production}
            Language:${Language}
            Plot:${Plot}
            Actors:${Actors}
            `)
        })
        .catch(function(e){
            console.log(error)
        })
