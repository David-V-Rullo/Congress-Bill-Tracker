function getBillDate() {
    var url = "https://cors-anywhere.herokuapp.com/https://api.govinfo.gov/collections?api_key=xwdhnVuUdX3OW6FrnlxEsTIlcDMTjNGHjBHpmPgd";
    fetch(url)
    
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

        })
}
getBillDate();

//curl -X 'GET' \ 'https://www.govinfo.gov/link/bills/112/hr/1027?billversion=mostrecent&link-type=details' \ -H 'accept: */*'