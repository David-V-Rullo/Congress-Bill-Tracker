// var topic = $("#topic option:selected").index()
var pastWeekSearch = false
var pastMonthSearch = false
var currentCongSearch = false
var topicSearch = ""

$("#month-search").on("click", function(){
  pastMonthSearch = true
  if (pastWeekSearch === true || currentCongSearch === true){
    currentCongSearch = false;
    pastWeekSearch = false;
  }
  console.log("Month search is: " + pastMonthSearch)
  console.log("Week search is: " + pastWeekSearch)
  console.log("Congress search is: " + currentCongSearch)
  console.log($(this).attr("id"))
  })
$("#week-search").on("click", function(){
  pastWeekSearch = true
  if (pastMonthSearch === true || currentCongSearch === true){
    currentCongSearch = false;
    pastMonthSearch = false;
  }
  console.log("Month search is: " + pastMonthSearch)
  console.log("Week search is: " + pastWeekSearch)
  console.log("Congress search is: " + currentCongSearch)
  console.log($(this).attr("id"))
  })
$("#congress-search").on("click", function(){
  currentCongSearch = true
  if (pastMonthSearch === true || pastWeekSearch === true){
      pastWeekSearch = false;
      pastMonthSearch = false;
  }
  console.log("Month search is: " + pastMonthSearch)
  console.log("Week search is: " + pastWeekSearch)
  console.log("Congress search is: " + currentCongSearch)
  console.log($(this).attr("id"))
  })


function renderBillStatus() {
  $(".status-button").each(function () {
    console.log($(this).attr("id"));
    //  Looks at data and gets back status code
    //  If the status code matches the button ID, light that button. //   All buttons should have default of grey.
  });
}



// var billTextEl= document.getElementById("bill-text")



