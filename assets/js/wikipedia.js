//Copy these variables

var wikiEndpointExtract= "https://en.wikipedia.org/api/rest_v1/page/summary/"

var congressPerson = "Tulsi_Gabbard";

var congressExtract;
var congressPic;
congressTitle;

//END copy variables


//wikipedia's fetch has to have &origin=* to get past CORS request errors


// //var congressImg;
//var wikiEndpointImg = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles="
//CongressImg contains the output of this function and works properly at the moment.
//I think this can get commented/deleted out since the summary page lets me pull the img data too
// fetch(wikiEndpointImg + congressPerson + "&origin=*")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
    
//     console.log(response)
//     for (const [key, value] of Object.entries(response.query.pages)) {
//         pageid=(`${key}`);
//         console.log(pageid)
//         congressImg=response.query.pages[pageid].original.source
//       }
    
//   });




//function to search for page extract wikipedia - still working on it
//USE THIS FUNCTION + variables on top
function getCongressExtract()  {
fetch(wikiEndpointExtract + congressPerson + "?redirect=true")
  .then(function (responseExtract) {
    return responseExtract.json();
  })
  .then(function (responseExtract){
    console.log("testing")
    console.log(responseExtract)
    //returns summary of wiki page
    congressExtract=responseExtract.extract
    //gives url link to official photo
    congressPic=responseExtract.originalimage.source
    //Gives state/title if they have one (ex. senate majority leader, etc)
    congressTitle=responseExtract.description

  })
};


//END FUNCTION TO COPY

















// //old wiki query please ignore

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