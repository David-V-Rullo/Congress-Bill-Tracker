
//this element is going to change because we're not saving this to the same part of the screen
var billByDateTextEl= document.getElementById("bill-text")
var searchedPage = wikiEndpoint + "?" + parser + congressPerson + "&prop=text&formatversion=2&format=json&origin=*"






//THis function queries wikipedia based on variable congressperson,which will pull from the other API - placeholder Chuck Schumer

var wikiEndpoint = "https://en.wikipedia.org/w/api.php";
var parser = "action=parse&page=";
var congressPerson="Chuck_Schumer"

//wikipedia's fetch has to have &origin=* to get past CORS request errors

fetch(wikiEndpoint + "?" + parser + congressPerson + "&prop=text&formatversion=2&format=json&origin=*")
    .then(function(response){return response.json();})
    .then(function(response) {
         console.log(JSON.stringify(response))
         wikiOutput=(JSON.stringify(response))
         wikiData=(Object.keys(wikiOutput))
        wikiData1=(JSON.parse(wikiOutput))
        //start parsing for image
        var t = $(wikiData).find('a[href] img').first();
        if(!t.length)
            console.error('there\'s no image with a link in this page');
        else
            alert(t.closest('a').attr('href'));
          });





//SEARCH FIRST IMAGE
        //  $(pagehtml).find('img').first().attr('src'); 
        //  var t = $(pagehtml).find('img').first().closest('a');
        //  if(!t.length)
        //      console.error('first image does not have a link')
        //  else
        //      alert(t.attr('href')); // first image's link


