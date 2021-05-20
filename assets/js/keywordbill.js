//search bills by keyword

//GET https://api.propublica.org/congress/v1/bills/search.json?query={query}
//global variables
var billKeyTextEl= document.getElementById("bill-text") //bill data destination
var userSearch;
var billKeyOutput={};
var billKeyData;
var topics=document.getElementById("topic")
var billKeyId;
var billKeySponsor;
var billKeyTitle;

//Get search results
topics.addEventListener("change", select)
function select(event) {
getKeyBill(event.target.value)
    console.log(event.target.value)
}



//Default get latest Bill

function getKeyBill(topic) {
    var url = "https://api.propublica.org/congress/v1/bills/search.json?query=" + topic;
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" }
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (keyLocRes) {
            console.log(JSON.stringify(keyLocRes))
            
            billKeyOutput=(JSON.stringify(keyLocRes))
            console.log(Object.keys(keyLocRes))
            console.log(JSON.parse(billKeyOutput))
            billKeyData=(JSON.parse(billKeyOutput))
            //Bill ID
            billKeyId=billKeyData.results[0].bills[0].bill_id;
            //BILL SPONSOR
            billKeySponsor=billKeyData.results[0].bills[0].sponsor_name;
            //BILL TITLE
            billKeyTitle=billKeyData.results[0].bills[0].short_title;

            //MUST SAVE billKeyId, billKeySponsor, billKeyTitle to different HTML elements
            billKeyTextEl.innerText=billKeyId
        })
}
