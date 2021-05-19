// var topic = $("#topic option:selected").index()
var pastWeekSearch = false;
var pastMonthSearch = false;
var currentCongSearch = false;
// var topicSearch = "";

// Clark Code Vars
var billByDateTextEl = document.getElementById("bill-text");

var dateBillOutput = {};
var dateBillData;
var billKeyTextEl = document.getElementById("bill-text"); //bill data destination
var userSearch;
var billKeyOutput = {};
var billKeyData;
var topics = document.getElementById("topic");
var billTextEl = document.getElementById("bill-text");


// Working Code for selector buttons on side bar. Only allows user to pick one and populate the boolean for what they want. This boolean is referenced when the search function exectues. 

$("#month-search").on("click", function () {
    pastMonthSearch = true;
    if (pastWeekSearch === true || currentCongSearch === true) {
        currentCongSearch = false;
        pastWeekSearch = false;
    }
    console.log("Month search is: " + pastMonthSearch);
    console.log("Week search is: " + pastWeekSearch);
    console.log("Congress search is: " + currentCongSearch);
    console.log($(this).attr("id"));
});
$("#week-search").on("click", function () {
    pastWeekSearch = true;
    if (pastMonthSearch === true || currentCongSearch === true) {
        currentCongSearch = false;
        pastMonthSearch = false;
    }
    console.log("Month search is: " + pastMonthSearch);
    console.log("Week search is: " + pastWeekSearch);
    console.log("Congress search is: " + currentCongSearch);
    console.log($(this).attr("id"));
});
$("#congress-search").on("click", function () {
    currentCongSearch = true;
    if (pastMonthSearch === true || pastWeekSearch === true) {
        pastWeekSearch = false;
        pastMonthSearch = false;
    }
    console.log("Month search is: " + pastMonthSearch);
    console.log("Week search is: " + pastWeekSearch);
    console.log("Congress search is: " + currentCongSearch);
    console.log($(this).attr("id"));
});

// Renders the bill status this should be called in all search functions and initial bill on load. 
//  If the status code matches the button ID, light that button. //   All buttons should have default of grey.
function renderBillStatus() {
    $(".status-button").each(function () {
        console.log($(this).attr("id"));

    });
}
//FUNCTION TO SEARCH BILLS BY DATE

function getBillDate() {
    var url = "https://api.propublica.org/congress/v1/bills/search.json";
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (dateLocRes) {
            //console.log(JSON.stringify(dateLocRes));

            dateBillOutput = JSON.stringify(dateLocRes);
            //console.log(Object.keys(dateLocRes));
            //console.log(JSON.parse(dateBillOutput));
            dateBillData = JSON.parse(dateBillOutput);
            billByDate =
                dateBillData.results[0].bills[0].bill_id +
                " " +
                dateBillData.results[0].bills[0].sponsor_name +
                " " +
                dateBillData.results[0].bills[0].short_title;
            billTextEl.innerText = billNewest;
        });
}

function getBillDate() {
    var url = "https://api.propublica.org/congress/v1/bills/search.json";
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (dateLocRes) {
            //console.log(JSON.stringify(dateLocRes));

            dateBillOutput = JSON.stringify(dateLocRes);
            //console.log(Object.keys(dateLocRes));
            //console.log(JSON.parse(dateBillOutput));
            dateBillData = JSON.parse(dateBillOutput);
            billByDate =
                dateBillData.results[0].bills[0].bill_id +
                " " +
                dateBillData.results[0].bills[0].sponsor_name +
                " " +
                dateBillData.results[0].bills[0].short_title;
            billTextEl.innerText = billByDate;
        });
}
getLatestBill();
getBillDate();



//Get search results
topics.addEventListener("change", select);
function select(event) {
    getKeyBill(event.target.value);
    //console.log(event.target.value);
}

//Default get latest Bill

function getKeyBill(topic) {
    var url =
        "https://api.propublica.org/congress/v1/bills/search.json?query=" + topic;
    fetch(url, {
        headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
    })
        .then(function (response) {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then(function (keyLocRes) {
            //console.log(JSON.stringify(keyLocRes));

            billKeyOutput = JSON.stringify(keyLocRes);
            //console.log(Object.keys(keyLocRes));
            //console.log(JSON.parse(billKeyOutput));
            billKeyData = JSON.parse(billKeyOutput);
            billKey =
                billKeyData.results[0].bills[0].bill_id +
                " " +
                billKeyData.results[0].bills[0].sponsor_name +
                " " +
                billKeyData.results[0].bills[0].short_title;
            billKeyTextEl.innerText = billKey;
        });
}

var billOutput = {};
var billData;


//Default get latest Bill

function getLatestBill() {
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
            //console.log(JSON.stringify(locRes))

            billOutput = (JSON.stringify(locRes))
            //console.log(Object.keys(locRes))
            //console.log(JSON.parse(billOutput))
            billData = (JSON.parse(billOutput))
            billNewest = billData.results[0].bills[0].bill_id + " " + billData.results[0].bills[0].sponsor_name + " " + billData.results[0].bills[0].short_title;
            billTextEl.innerText = billNewest
        })
}
getLatestBill();

//Date search
console.log("Entering script.js");
var dateSearchResultsEl = $("#date-search-results");
var searchBtn = $('.search-submit');
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
var date;

function billsByDate() {
    dateSearchResultsEl.empty();
    dateSearchEl.show();
    pageNumEl.text((offset / 20) + 1);

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
                //console.log(bills[i].latest_major_action_date);
                if (moment(bills[i].latest_major_action_date).isAfter(date)) {
                    // console.log(
                    //     "Bill id: " + bills[i].bill_id +
                    //     " Date: " + bills[i].latest_major_action_date +
                    //     " Is after: " + date
                    // );
                    
                    //Creates a card for each result
                    var searchCard = $('<div>').attr('class', 'bill-card');
                    var cardHead = $('<h4>').append($('<strong>').text(bills[i].bill_id + " Date: " + bills[i].latest_major_action_date));
                    searchCard.append(cardHead);
                    var cardList = $('<ul>');
                    var liOne = $('<li>').text("Sponsor(s): ").append($('<a>').text(bills[i].sponsor_name));
                    var liTwo = $('<li>').text("Comittees: ").append($('<a>').text(bills[i].committees));
                    var liThree = $('<li>').text("Bill text: ").append($('<a>').text("text"));
                    cardList.append(liOne, liTwo, liThree);
                    searchCard.append(cardList);
                    var statusBoxes = $('<div>').attr('class', 'bill-status');
                    var boxOne = $('<button>').attr('class', 'status-button').text("Introduced");
                    var boxTwo = $('<button>').attr('class', 'status-button').text("Passed House");
                    var boxThree = $('<button>').attr('class', 'status-button').text("Passed Senate");
                    var boxFour = $('<button>').attr('class', 'status-button').text("Became Law");
                    statusBoxes.append(boxOne, boxTwo, boxThree, boxFour);
                    searchCard.append(statusBoxes);
                    dateSearchResultsEl.append(searchCard);
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
    console.log("SEARCH CLICK");
    offset = 0;
    if (pastWeekSearch) {
        date = oneWeek;
        console.log(date);
        billsByDate();
    }
    else if (pastMonthSearch) {
        date = oneMonth;
        console.log(date);
        billsByDate();
    }
    else {
        date = currentCongress;
        console.log(date);
        billsByDate();
    }
});

nextBtn.on('click', function () {
    console.log("Next page");
    offset += 20;
    billsByDate();
});

previousBtn.on('click', function () {
    console.log("previous page");
    if (offset >= 20) {
        offset -= 20;
        billsByDate();
    }
});
//End date search