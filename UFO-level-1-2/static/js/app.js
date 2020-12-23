// from data.js
// from data.js
const tableData = data;
var filteredData = tableData; 

// selecting the buttons for use
const filterButton = d3.select("#filter-btn");
const resetButton = d3.select("#reset-btn")

// selecting the table for use
const table = d3.select("tbody");
const inputDate = d3.select("#datetime");
const inputCity = d3.select("#city");
const inputState = d3.select("#state");
const inputCountry = d3.select("#country");
const inputShape = d3.select("#shape");


//creating a function that will add in the rows of our filtered dataset into the webpage
const displayFilter = (settings)=>{

    //clearing previous filters
    table.text("");

    settings.forEach(sighting=>{
        var row = table.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
            row.append("td").text(value);
        });
    });
};


//displaying full data at the start
displayFilter(tableData);

filterButton.on("click", function() {
    console.log("Filter Button Was Clicked");
    
    //clearing all values displayed on the webpage from previous filters
    console.log("Clearing Old Entries");
    table.text("");
    filteredData = tableData;
    
    //reading in values that are in the filter boxes
    var dateFilterValue = inputDate.property("value");
    var cityFilterValue = inputCity.property("value");
    var stateFilterValue = inputState.property("value");
    var countryFilterValue = inputCountry.property("value");
    var shapeFilterValue = inputShape.property("value");

   

    //creating functions that will filter by appropriate factor
    const dateFilter = (table)=>{
        return table.filter(sighting=>sighting.datetime === dateFilterValue);
    };
    const cityFilter = (table)=>{
        return table.filter(sighting=>sighting.city === cityFilterValue);
    };
    const stateFilter = (table)=>{
        return table.filter(sighting=>sighting.state === stateFilterValue);
    };
    const countryFilter = (table)=>{
        return table.filter(sighting=>sighting.country === countryFilterValue);
    };
    const shapeFilter = (table)=>{
        return table.filter(sighting=>sighting.shape === shapeFilterValue);
    };

    //appending filtered data to webpage
    if (dateFilterValue != "") {
        console.log(`Filter-Date: ${dateFilterValue}`);
        filteredData = dateFilter(filteredData);
        displayFilter(filteredData);
    }
    else {
        displayFilter(filteredData);
    }

    if (cityFilterValue != "") {
        console.log(`Filter-City: ${cityFilterValue}`);
        filteredData = cityFilter(filteredData);
        displayFilter(filteredData);
    }
    else {
        displayFilter(filteredData);
    }

    if (stateFilterValue != "") {
        console.log(`Filter-State: ${stateFilterValue}`);
        filteredData = stateFilter(filteredData);
        displayFilter(filteredData);
    }
    else {
        displayFilter(filteredData);
    }

    if (countryFilterValue != "") {
        console.log(`Filter-Country: ${countryFilterValue}`);
        filteredData = countryFilter(filteredData);
        displayFilter(filteredData);
    }
    else {
        displayFilter(filteredData);
    }

    if (shapeFilterValue != "") {
        console.log(`Filter-Shape: ${shapeFilterValue}`);
        filteredData = shapeFilter(filteredData);
        displayFilter(filteredData);
    }
    else {
        displayFilter(filteredData);
    }
    
});


//resetting the displayed data to the full dataset while keeping the filter values untouched
resetButton.on("click", function() {
    console.log("Clearing Old Entries");
    table.text("");
    displayFilter(tableData);
    filteredData = tableData;
});
