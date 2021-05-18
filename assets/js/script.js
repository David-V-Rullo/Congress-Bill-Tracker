console.log("Entering script.js");
var billTextEl = $('#bill-text');
var sponsorEl = $('#sponsor').children();

var current = moment().format("YYYY-MM-DD");
var oneWeek = moment().subtract(2, 'days').format('YYYY-MM-DD');
var oneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');

function billsByDate(date = oneWeek) {
    var offset = 0;
    var good = 10;
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
                    }
                }
            })
        offset = offset + 20;
        good--;
    }
}

billsByDate();