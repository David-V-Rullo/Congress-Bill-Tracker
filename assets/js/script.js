console.log("Entering script.js");
var billTextEl = $('#bill-text');
var sponsorEl = $('#sponsor').children();

function printResult(result)
{
    console.log(result.sponsor_name);
}

function fetchPropublicaApi() {
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
        .then(function (locRes) {
            for(var i = 0; i < locRes.results[0].bills.length; i++){
                printResult(locRes.results[0].bills[i]);
            }
        })
}

fetchPropublicaApi();