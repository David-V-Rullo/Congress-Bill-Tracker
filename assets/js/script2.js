
//this element is going to change because we're not saving this to the same part of the screen
var billByDateTextEl= document.getElementById("bill-text")



var govInfoOutput={};
var govInfoData;




//GOVINFO TO SEARCH COSIGNERS AND SO ON




// function getGovInfo() {
//     var url = "https://en.wikipedia.org/w/api.php?action=parse&page=Pet_door&prop=text&formatversion=json&origin=*";
//     fetch(url)
//         .then(function (response) {
//             if (!response.ok) {
//                 throw response.json();
//             }
//             return response.json();
//         })
//         .then(function (govInfoLocRes) {
//             console.log(JSON.stringify(govInfoLocRes))
            
//             govInfoOutput=(JSON.stringify(govInfoLocRes))
//             console.log(Object.keys(govInfoLocRes))
//             console.log(JSON.parse(govInfoOutput))
//             govInfoData=(JSON.parse(govInfoOutput))
//             //query the results to pull what we want
//             govInfoSelected=govInfoData
//             //CHANGE FROM BILLTEXTEL
//             billTextEl.innerText=billInfo
//         })
// }
// getGovInfo();


var wikiEndpoint = "https://en.wikipedia.org/w/api.php";
var params = "action=parse&page=Chuck_Schumer&prop=text&formatversion=2&format=json";

/**
 * Send the request to get the images
 */
fetch(wikiEndpoint + "?" + params + "&origin=*")
    .then(function(response){return response.json();})
    .then(function(response) {
         console.log(JSON.stringify(response))
          });









