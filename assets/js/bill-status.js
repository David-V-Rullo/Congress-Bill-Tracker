function renderBillStatus () {
    $(".status-button").each(function (){
        console.log($(this).attr("id"))
    //  Looks at data and gets back status code
    //  If the status code matches the button ID, light that button. //   All buttons should have default of grey. 
    })
   
}

renderBillStatus()

function dataSet() {
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
        .then(function (response) {
           return response
        })
        
}
var data = dataSet()
console.log(data)




