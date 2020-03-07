// from data.js
let tableData = data;

//console.log the data.
console.log(tableData);

//populate the table at load
let tbody = d3.select("tbody");

tableData.forEach(function(alien) {
    console.log(alien);
    let row = tbody.append("tr");

    Object.entries(alien).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

//button functionality

let button = d3.select("#filter-btn")

let input = d3.select("#datetime");

input.on("keyup", function() {
    if (event.keyCode === 13) {
        document.getElementById("#filter-btn").click();
    }
});

button.on("click", function () {
    event.preventDefault();
    console.log("Click!");
    let inputElementDatetime = d3.select("#datetime");
    let inputValueDatetime = inputElementDatetime.property("value");
    console.log(inputValueDatetime);
    let inputElementCity = d3.select("#city");
    let inputValueCity = inputElementCity.property("value");
    console.log(inputValueCity);
    let inputElementState = d3.select("#state");
    let inputValueState = inputElementState.property("value");
    console.log(inputValueState);
    let inputElementCountry = d3.select("#country");
    let inputValueCountry = inputElementCountry.property("value");
    console.log(inputValueCountry);
    let inputElementShape = d3.select("#shape");
    let inputValueShape = inputElementShape.property("value");
    console.log(inputValueShape);

    function setDate(date) {
        return date.datetime === inputValueDatetime;
    };

    function setCity(city) {
        return city.city === inputValueCity;
    };

    function setState(state) {
        return state.state === inputValueState;
    };

    function setCountry(country) {
        return country.country === inputValueCountry;
    };

    function setShape(shape) {
        return shape.shape === inputValueShape;
    };

    let filteredData = tableData.filter(setDate).filter(setCity).filter(setState).filter(setCountry).filter(setShape);
    
    console.log(filteredData);

    // //scrap the existing table
    // //https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript
    
    var table = document.getElementById("ufo-table");
    for (var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }
    

    //replace with filtered data
    
    let tbody = d3.select("tbody");

    filteredData.forEach(function(alien) {
        console.log(alien);
        let row = tbody.append("tr");

        Object.entries(alien).forEach(function([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

});