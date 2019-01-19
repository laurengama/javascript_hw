// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// create table using data.js 
data.forEach((UFOsightings) => {
    var row = tbody.append("tr");
    Object.entries(UFOsightings).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
});


// FILTER BUTTON

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // clear the existing output
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  var tbodyByDate = d3.select("tbody");

  filteredData.forEach((sightingsByDate) => {
      var rowByDate = tbodyByDate.append("tr");
      Object.entries(sightingsByDate).forEach(([key, value]) => {
        var cellByDate = tbodyByDate.append("td");
        cellByDate.text(value);
      });
  });
});
