var billByDateTextEl= document.getElementById("bill-text")



var dateBillOutput={};
var dateBillData;




//FUNCTION TO SEARCH BILLS BY DATE




function getBillDate() {
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
        .then(function (dateLocRes) {
            console.log(JSON.stringify(dateLocRes))
            
            dateBillOutput=(JSON.stringify(dateLocRes))
            console.log(Object.keys(dateLocRes))
            console.log(JSON.parse(dateBillOutput))
            dateBillData=(JSON.parse(dateBillOutput))
            billByDate=dateBillData.results[0].bills[0].bill_id + " " + dateBillData.results[0].bills[0].sponsor_name + " " + dateBillData.results[0].bills[0].short_title;
            billTextEl.innerText=billNewest
        })
}
getBillDate();


function getBillDate() {
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
        .then(function (dateLocRes) {
            console.log(JSON.stringify(dateLocRes))
            
            dateBillOutput=(JSON.stringify(dateLocRes))
            console.log(Object.keys(dateLocRes))
            console.log(JSON.parse(dateBillOutput))
            dateBillData=(JSON.parse(dateBillOutput))
            billByDate=dateBillData.results[0].bills[0].bill_id + " " + dateBillData.results[0].bills[0].sponsor_name + " " + dateBillData.results[0].bills[0].short_title;
            billTextEl.innerText=billByDate
        })
}
getLatestBill();


