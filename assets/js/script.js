console.log("Entering script.js");
var dateSearchResultsEl = $("#date-search-results");
var searchBtn = $('#search-submit');
var previousBtn = $('#previous');
var nextBtn = $('#next');
var pageNumEl = $("#page-number");
var dateSearchEl = $("#date-search-section");
var pastWeekBtn = $("#week-search");
var pastMonthBtn = $("#month-search");
var currentBtn = $("#congress-search");

var currentCongress = moment().startOf('year').format("YYYY-MM-DD");
var oneWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
var oneMonth = moment().subtract(1, 'months').format('YYYY-MM-DD');
var offset = 0;

function billsByDate(date = oneWeek) {

    dateSearchResultsEl.empty();
    dateSearchEl.show();
    pageNumEl.text((offset/20)+1);

    var url = "https://api.propublica.org/congress/v1/bills/search.json?sort=date&dir=desc&offset=".concat(offset);
    console.log("Offset: " + offset);
    console.log(date);
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
            var bills = response.results[0].bills;
            console.log(bills);
            for (i = 0; i < bills.length; i++) {
                console.log(bills[i].latest_major_action_date);
                if (moment(bills[i].latest_major_action_date).isAfter(date)) {
                    console.log(
                        "Bill id: " + bills[i].bill_id +
                        " Date: " + bills[i].latest_major_action_date +
                        " Is after: " + date
                    );
                    dateSearchResultsEl.append($("<p>").text(
                        "Bill id: " + bills[i].bill_id +
                        " Date: " + bills[i].latest_major_action_date)
                    );
                }
                else {
                    console.log("TOO EARLY");
                    dateSearchResultsEl.append($("<p>").text("Too early"));
                }
            }
        })
}

dateSearchEl.hide();
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