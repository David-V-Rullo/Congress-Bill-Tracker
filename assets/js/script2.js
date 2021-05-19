
//this element is going to change because we're not saving this to the same part of the screen
var billByDateTextEl= document.getElementById("bill-text")



var govInfoOutput={};
var govInfoData;




//GOVINFO TO SEARCH COSIGNERS AND SO ON




function getGovInfo() {
    var url = "https://api.propublica.org/congress/v1/bills/search.json";
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" }
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (govInfoLocRes) {
            console.log(JSON.stringify(govInfoLocRes))
            
            govInfoOutput=(JSON.stringify(govInfoLocRes))
            console.log(Object.keys(govInfoLocRes))
            console.log(JSON.parse(govInfoOutput))
            govInfoData=(JSON.parse(govInfoOutput))
            //query the results to pull what we want
            govInfoSelected=govInfoData
            //CHANGE FROM BILLTEXTEL
            billTextEl.innerText=billInfo
        })
}
getGovInfo();











