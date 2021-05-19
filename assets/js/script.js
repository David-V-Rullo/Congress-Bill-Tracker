console.log("Entering script.js");
var dateSearchResultsEl = $("#date-search-results");
var searchBtn = $('#search-submit');
var previousBtn = $('#previous');
var nextBtn = $('#next');

var current = moment().format("YYYY-MM-DD");
var oneWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
var oneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
var offset = 0;

function billsByDate(date = oneWeek) {
    dateSearchResultsEl.show();

    var url = "https://api.propublica.org/congress/v1/bills/search.json?sort=date&dir=desc&offset=".concat(offset);
    console.log("Offset: " + offset);
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
            for (i = 0; i < response.results[0].bills.length; i++) {
                console.log(response.results[0].bills[i].latest_major_action_date);
                if (moment(response.results[0].bills[i].latest_major_action_date).isAfter(date)) {
                    console.log(
                        "Bill id: " + response.results[0].bills[i].bill_id +
                        " Date: " + response.results[0].bills[i].latest_major_action_date +
                        " Is after: " + date
                    );
                    dateSearchResultsEl.append($("<p>").text(
                        "Bill id: " + response.results[0].bills[i].bill_id +
                        " Date: " + response.results[0].bills[i].latest_major_action_date)
                    );
                }
                else {
                    console.log("TOO EARLY");
                }
            }
        })
}

dateSearchResultsEl.hide();
searchBtn.on('click', function () {
    offset = 0;
    billsByDate();
});

nextBtn.on('click', function () {
    offset += 20;
    billsByDate();
});

previousBtn.on('click', function () {
    if (offset >= 20) {
        offset -= 20;
        billsByDate();
    }
});