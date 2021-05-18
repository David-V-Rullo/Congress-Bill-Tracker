console.log("Entering script.js");
var billTextEl = $('#bill-text');
var sponsorEl = $('#sponsor').children();

// function printResult(result)
// {
//     console.log(result.sponsor_name);
// }

// function fetchPropublicaApi() {
//     var url = "https://api.propublica.org/congress/v1/bills/search.json";

//     fetch(url, {
//         headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" }
//     })
//         .then(function (response) {
//             if (!response.ok) {
//                 throw response.json();
//             }
//             return response.json();
//         })
//         .then(function (locRes) {
//             for(var i = 0; i < locRes.results[0].bills.length; i++){
//                 printResult(locRes.results[0].bills[i]);
//             }
//         })
// }

// fetchPropublicaApi();

//var billTextEl= document.getElementById("bill-text")



var billOutput = {};
var billData;

//https://api.propublica.org/congress/v1/{chamber}/votes/{start-date}/{end-date}.json
//https://api.propublica.org/congress/v1/{congress}/{chamber}/bills/{type}.json

function test() {
    var url = "https://api.propublica.org/congress/v1/117/both/bills/introduced.json?offset=0";
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" }
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (locRes) {
            billOutput = (JSON.stringify(locRes))
            billData = (JSON.parse(billOutput))
            var billNewest = billData.results[0].bills[0].bill_id + " " + billData.results[0].bills[0].sponsor_name + " " + billData.results[0].bills[0].short_title;
            billTextEl.innerText = billNewest
            console.log(billData.results[0]);
        })
}

var current = moment().format("YYYY-MM-DD");
var oneWeek = moment().add(7, 'days').format('YYYY-MM-DD');
var oneMonth = moment().add(1, 'months').format('YYYY-MM-DD');


function billsByDate(date) {
    var offset = 0;
    var good = 3;
    while (good > 0) {
        
        var url = "https://api.propublica.org/congress/v1/117/both/bills/introduced.json?offset=".concat(offset);
        console.log(url);
        fetch(url, {
            headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" }
        })
            .then(function (response) {
                if (!response.ok) {
                    throw response.json();
                }
                return response.json();
            })
            .then(function (response) {
                console.log(response.results[0].bills);
                response.results[0].bills.forEach(function (element) {
                    console.log("Bill id: " + element.bill_id + " Date: " + element.introduced_date);
                })
            })
        offset = offset + 20;
        good--;
    }
}

billsByDate(0);