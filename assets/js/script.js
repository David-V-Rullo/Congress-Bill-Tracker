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
var oneWeek = moment().subtract(2, 'days').format('YYYY-MM-DD');
var oneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');

function billsByDate(date = oneWeek) {
    var offset = 0;
    var good = 5;
    while (good > 0) {
        console.log(good);
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
                for(i = 0; i < response.results[0].bills.length; i++){
                    console.log(date);
                    if(moment(response.results[0].bills[i].introduced_date).isAfter(date)){
                        console.log("Bill id: " + response.results[0].bills[i].bill_id + " Date: " + response.results[0].bills[i].introduced_date + " Is after: " + date);
                    }
                    else{
                        console.log("TOO EARLY");
                        good = 0; 
                        break;
                    }
                }
            })
        offset = offset + 20;
        good--;
    }
}

billsByDate();