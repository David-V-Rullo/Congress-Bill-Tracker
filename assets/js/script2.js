
//this element is going to change because we're not saving this to the same part of the screen
var billByDateTextEl= document.getElementById("bill-text")







//THis function queries wikipedia based on variable congressperson,which will pull from the other API - placeholder Chuck Schumer

var wikiEndpoint = "https://en.wikipedia.org/w/api.php";
var parser = "action=parse&page=";
var congressPerson="Chuck_Schumer"

//wikipedia's fetch has to have &origin=* to get past CORS request errors

fetch(wikiEndpoint + "?" + parser + congressPerson + "&prop=text&formatversion=2&format=json&origin=*")
    .then(function(response){return response.json();})
    .then(function(response) {
         console.log(JSON.stringify(response))
          });









