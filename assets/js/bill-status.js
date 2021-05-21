//Global Variables
var pastWeekSearch = false;
var pastMonthSearch = false;
var currentCongSearch = false;
var billIdEl = $("#bill-id");
var billTitleEl = $("#bill-title");
var billSponEl = $("#sponsor")
var billSponNameEl = $("#sponsor-name");
var billSponTitleEl = $("#sponsor-title");
var billSponPartyEl = $("#sponsor-party");
var billCommEl = $("#committee");
var billTextEl = $("#bill-text");
var billLongTitle = $("#bill-long-title");
var introducedDateEl = $("#introduced"); 

// Modal Functionality
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Modal variables
var modalSponTitle = $("#rep-title")
var modalSponName = $("#rep-name");
var modalSponParty = $("#rep-party");
var modalSponBio = $("#rep-bio");
var modalSponCap = $("#spon-image-caption");

// Clark Code Vars
var billByDateTextEl = document.getElementById("bill-text");
var billNewest = {};
var dateBillOutput = {};
var dateBillData;
var billKeyTextEl = document.getElementById("bill-text"); //bill data destination
var userSearch;
var billKeyOutput = {};
var billKeyData;
var topics = document.getElementById("topic");
var billOutput = {};
var billData;

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
function renderBillStatus(billData) {
  //  $(".status-button").each(function () {
  if (billData.house_passage === null && billData.senate_passage === null) {
    $("#introduced").addClass("active-status");
    $("#introduced").removeClass("inactive-status");
    return;
  }
  if (billData.house_passage !== null && billData.senate_passage === null) {
    $("#pass-house").addClass("active-status");
    $("#pass-house").removeClass("inactive-status");
    return;
  }
  if (billData.senate_passage !== null) {
    $("#pass-senate").addClass("active-status");
    $("#pass-senate").removeClass("inactive-status");
    return;
  }
  if (billData.active !== false) {
    $("#became-law").addClass("active-status");
    $("#became-law").removeClass("inactive-status");
    return;
  }
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
      // console.log(JSON.stringify(dateLocRes));

      dateBillOutput = JSON.stringify(dateLocRes);
      // console.log(Object.keys(dateLocRes));
      //       console.log(JSON.parse(dateBillOutput));
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
// getBillDate();

//Get search results
topics.addEventListener("change", select);
function select(event) {
  getKeyBill(event.target.value);
  console.log(event.target.value);
}

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
      // console.log(Object.keys(keyLocRes));
      //       console.log(JSON.parse(billKeyOutput));
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

//Default get latest Bill

function getLatestBill() {
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
    .then(function (locRes) {

      billOutput = JSON.stringify(locRes);
      billData = JSON.parse(billOutput);
      console.log(billData);
      billNewest = billData.results[0].bills[0];
      console.log(billNewest);

      billIdEl.text(billNewest.bill_id.toUpperCase());
      billSponNameEl.text(billNewest.sponsor_name) 
      billSponTitleEl.text(billNewest.sponsor_title) 
      billSponPartyEl.text(` (${billNewest.sponsor_party} - ${billNewest.sponsor_state})`);

      //Bill Card population
      billCommEl.text(billNewest.committees);
      billTitleEl.text(billNewest.short_title);
      billLongTitle.text(billNewest.title);

      //Modal Population
      modalSponName.text(
        `${billNewest.sponsor_title} ${billNewest.sponsor_name} (${billNewest.sponsor_party} - ${billNewest.sponsor_state})`
      );
      modalSponParty.text(
        `${billNewest.sponsor_party} - ${billNewest.sponsor_state}`
      );
      modalSponCap.text(
        `${billNewest.sponsor_title} ${billNewest.sponsor_name}`
      );
      //Status Bar Changes
      introducedDateEl.text(`Introduced: ${billNewest.introduced_date}`);

      renderBillStatus(billNewest);
    });
}
// When the user clicks on the button, open the modal
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function () {
    modal.style.display = "none";
  }

//Click event for populating modal with image and summary
billSponEl.click(function (e) {
  console.log(e)
  modal.style.display = "block";
  // event.preventDefault()
  // var wikiEndpointExtract= "https://en.wikipedia.org/api/rest_v1/page/summary/"
  // var congressExtract;
  // var congressPic;
  // var congressTitle;
  // var congressPerson = billSponNameEl.text()
  //   congressPerson = congressPerson.split(" ")
  //   congressPerson = congressPerson.join("_")
  //   console.log(congressPerson)
  // var congressExtract;
  
  // // CongressImg contains the output of this function and works properly at the moment.
 
  //   function getCongressExtract()  {
  //     fetch(wikiEndpointExtract + congressPerson + "?redirect=true")
  //       .then(function (responseExtract) {
  //         return responseExtract.json();
  //       })
  //       .then(function (responseExtract){
  //         console.log("testing")
  //         console.log(responseExtract)
  //         //returns summary of wiki page
  //         congressExtract=responseExtract.extract
  //         //gives url link to official photo
  //         congressPic=responseExtract.originalimage.source
  //         //Gives state/title if they have one (ex. senate majority leader, etc)
  //         congressTitle=responseExtract.description
  //       })
  //     };
  //     getCongressExtract()
  });
  getLatestBill();
// var billTextEl= document.getElementById("bill-text")
// var wikiEndpoint =
//   "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=";
// // var parser = "action=query&prop=pageimages&format=json&piprop=";
// var congressPerson = "Chuck_Schumer";

// //wikipedia's fetch has to have &origin=* to get past CORS request errors

// fetch(wikiEndpoint + congressPerson + "&origin=*")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (response) {
//     console.log(response);
//   });

  // var billTextEl= document.getElementById("bill-text")



