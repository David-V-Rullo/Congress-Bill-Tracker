// var topic = $("#topic option:selected").index()
var pastWeekSearch = false;
var pastMonthSearch = false;
var currentCongSearch = false;
// var topicSearch = "";

// Modal functionality JS
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Clark Code Vars
var billByDateTextEl = document.getElementById("bill-text");

var dateBillOutput = {};
var dateBillData;
var billKeyTextEl = document.getElementById("bill-text"); //bill data destination
var userSearch;
var billKeyOutput = {};
var billKeyData;
var topics = document.getElementById("topic");


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
      console.log(JSON.stringify(dateLocRes));

      dateBillOutput = JSON.stringify(dateLocRes);
      console.log(Object.keys(dateLocRes));
      console.log(JSON.parse(dateBillOutput));
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
      console.log(JSON.stringify(dateLocRes));

      dateBillOutput = JSON.stringify(dateLocRes);
      console.log(Object.keys(dateLocRes));
      console.log(JSON.parse(dateBillOutput));
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
  console.log(event.target.value);
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
      console.log(JSON.stringify(keyLocRes));

      billKeyOutput = JSON.stringify(keyLocRes);
      console.log(Object.keys(keyLocRes));
      console.log(JSON.parse(billKeyOutput));
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

var billOutput={};
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
            console.log(JSON.stringify(locRes))
            
            billOutput=(JSON.stringify(locRes))
            console.log(Object.keys(locRes))
            console.log(JSON.parse(billOutput))
            billData=(JSON.parse(billOutput))
            billNewest=billData.results[0].bills[0].bill_id + " " + billData.results[0].bills[0].sponsor_name + " " + billData.results[0].bills[0].short_title;
            billTextEl.innerText=billNewest
        })
}
getLatestBill();
// var billTextEl= document.getElementById("bill-text")
