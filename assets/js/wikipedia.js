// var billTextEl= document.getElementById("bill-text")
var wikiEndpointImg = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles="
// var parser = "action=query&prop=pageimages&format=json&piprop=";
var wikiEndpointExtract= "http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles="

var congressPerson = "Chuck_Schumer";
var congressImg;
var congressExtract;

//wikipedia's fetch has to have &origin=* to get past CORS request errors



//CongressImg contains the output of this function and works properly at the moment.
fetch(wikiEndpointImg + congressPerson + "&origin=*")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    
    console.log(response)
    for (const [key, value] of Object.entries(response.query.pages)) {
        pageid=(`${key}`);
        congressImg=response.query.pages[326708].original.source
      }
    //console.log(response.query.pages.[326708].original.source)
  });




//function to search for page extract wikipedia - still working on it

fetch(wikiEndpointExtract + congressPerson + "&origin=*")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    //console.log(response.query.pages[326708].original.source)
    console.log(response)
    
  });



















// //old wiki query

// //this element is going to change because we're not saving this to the same part of the screen
// var billByDateTextEl= document.getElementById("bill-text")







// //THis function queries wikipedia based on variable congressperson,which will pull from the other API - placeholder Chuck Schumer

// var wikiEndpoint = "https://en.wikipedia.org/w/api.php";
// var parser = "action=query&titles=";
// var congressPerson="Chuck_Schumer"
// var searchedPage = wikiEndpoint + "?" + parser + congressPerson + "&prop=pageimages&formatversion=2&format=json&origin=*"
// //wikipedia's fetch has to have &origin=* to get past CORS request errors
// console.log(searchedPage)
// fetch(searchedPage)
//     .then(function(response){return response.json();})
//     .then(function(response) {
//          console.log(response)
//         //  var imgName=response.parse.images[1]
//         // console.log(imgName)
//         // document.getElementById("testimg").setAttribute("src", response.parse.images[1])
//         //start parsing for image
//     });
          



// //SEARCH FIRST IMAGE
//         //  $(pagehtml).find('img').first().attr('src'); 
//         //  var t = $(pagehtml).find('img').first().closest('a');
//         //  if(!t.length)
//         //      console.error('first image does not have a link')
//         //  else
//         //      alert(t.attr('href')); // first image's link