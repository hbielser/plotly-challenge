// console.log the data
d3.json("samples.json").then((importedData) => {
    // console.log(importedData);
    console.log(importedData.column_names)
});

// Initialize page with default plot 15.3 activity 2
function init() {
    data = [{
        x:[],
        y: []}]

    var CHART = d3.selectAll("#bar").node();

    Plotly.newPlot(CHART,data);
};

// Call updatePlotly() when a change takes place to the DOM
d3.selectAll("body").on("change", updatePlotly);

// create function called when a dropdown menu item is selected
function updatePlotly() {
    // prevent the page from refreshing
    d3.event.preventDefault();
   
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");

    // Assign the value of the dropdown menu option to a variable
    var id = dropdownMenu.node().value;
    console.log(idData);

    // clear the input value
    d3.select("#selDataset").node().value = "";

    // build plot with selected id data
    buildPlot(id)
}

//Module 15.3 activities 3, 7
function buildPlot(id) {
// Use the D3 library to read in samples.json.
    d3.json("samples.json").then((importedData) => {

        // var name = data.dataset.name;

//         // grab values from data file
//         data[id].map(row => row.sample_values)

//         data.sort(function(a, b) {
//             return parseFloat(b.sample_values) - parseFloat(a.sample_values);
//         });

//         // Slice the first 10 objects for plotting
//         data = data.slice(0,10);

//         // Reverse the array b/c of Plotly defaults
//         data = data.reverse();

// // Create a horizontal bar chart with a dropdown menu to display the top 
// // 10 OTUs found in that individual.

// // Use sample_values as the values for the bar chart.
// // Narrow to top 10 results per id

// // Use otu_ids as the labels for the bar chart.

//     // Create the trace for belly button data
//     var trace1 = {
//         x: data.map(row => row.sample_values),
//         y: data.map(row => row.otu_labels),
//         name: "Bacteria",
//         type: "bar",
//         orientation: "h"
//     };

//     // specify chart data
//     var chartData = [trace1];

//     // Use otu_labels as the hovertext for the chart.
//     // Apply the group bar mode to the layout
//     var layout = {
//         margin: {
//             l: 100,
//             r: 100,
//             t: 100,
//             b: 100
//         }
//     };

//     // Render the plot to the appropriate div tag
//     Plotly.newPlot("bar", chartData, layout);
    });
};