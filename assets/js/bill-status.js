// var topic = $("#topic option:selected").index()
var pastWeekSearch = false
var pastMonthSearch = false
var currentCongSearch = false
var topicSearch = ""

$("#month-search").on("click", function(){
  pastMonthSearch = true
  if (pastWeekSearch = true || currentCongSearch = true){
    currentCongSearch = false;
    pastWeekSearch = false;
  }
  console.log(pastMonthSearch)
  console.log(pastMonthSearch)
  console.log(currentCongSearch)
  console.log($(this).attr("id"))
  })
$("#week-search").on("click", function(){
  pastWeekSearch = true
  pastMonthSearch = false
  currentCongSearch = false
  console.log(pastMonthSearch)
  console.log(pastMonthSearch)
  console.log(currentCongSearch)
  console.log($(this).attr("id"))

  })
$("#congress-search").on("click", function(e){
  pastMonthSearch = false
  pastWeekSearch = false
  currentCongSearch = true
  console.log(pastMonthSearch)
  console.log(pastMonthSearch)
  console.log(currentCongSearch)
  console.log($(this).attr("id"))
  })
console.log(pastMonthSearch)

function renderBillStatus() {
  $(".status-button").each(function () {
    console.log($(this).attr("id"));
    //  Looks at data and gets back status code
    //  If the status code matches the button ID, light that button. //   All buttons should have default of grey.
  });
}
function renderBillEl(data) {
  renderBillStatus();
}

// function dataSet() {
//   var url = "https://api.propublica.org/congress/v1/bills/search.json";
//   fetch(url, {
//     headers: { "X-API-Key": "jHHlm068RlyEusHIX91YA9zmZrvEtDyGplugF6tH" },
//   })
//     .then(function (response) {
//       if (!response.ok) {
//         throw response.json();
//       }
//       return response.json();
//     })
//     .then(function (response) {
//       renderBillEl(response);
//     });
// }

var billTextEl= document.getElementById("bill-text")


var billOutput={};
var billData;

// function test() {
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
//             console.log(JSON.stringify(locRes))
            
//             billOutput=(JSON.stringify(locRes))
//             console.log(Object.keys(locRes))
//             console.log(JSON.parse(billOutput))
//             billData=(JSON.parse(billOutput))
//             billNewest=billData.results[0].bills[0].bill_id + " " + billData.results[0].bills[0].sponsor_name + " " + billData.results[0].bills[0].short_title;
//             billTextEl.innerText=billNewest
//         })
// }
// test();
