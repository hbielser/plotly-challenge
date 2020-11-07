// console.log the data


// Initialize page with default plot 15.3 activity 2
function init() {
    var selData = d3.select("#selDataset")
    d3.json("samples.json").then((importedData) => {
        // console.log(importedData);
        console.log(importedData.names)
        importedData.names.forEach((name) => {
            selData.append("Option").text(name).property("value")
        })
    optionChanged(importedData.names[0])
    });
};

init();

function optionChanged(userData) {
    demoData(userData);
    Charts(userData);
};

function demoData(userData) {
    d3.json("samples.json").then((data) => {
    console.log(data.metadata)
    var filterData = data.metadata.filter(md => md.id == userData)
    var firstElement = filterData[0]
    var sampleData = d3.select("#sample-metadata")
    sampleData.html("")
    Object.entries(firstElement).forEach(([key, value]) => {
        dataRow = sampleData.append("p")
        dataRow.text(`${key}: ${value}`)
    });
    });
};

//Module 15.3 activities 3, 7
function Charts(userData) {
// Use the D3 library to read in samples.json.
    d3.json("samples.json").then((importedData) => {

        var samples = importedData.samples;

        // grab values from data file
        var sampleFiltered = samples.filter(samples => samples.id == userData)
        var firstElement = sampleFiltered[0]
        var sampleOTUID = firstElement.otu_ids.map(sampleID => `OTU ${sampleID}`).slice(0,10).reverse()
        var sampleValues = firstElement.sample_values.slice(0,10).reverse()
        var sampleOTULabel = firstElement.otu_labels.slice(0,10).reverse()
        console.log(sampleValues);
        console.log(sampleOTUID);
        console.log(sampleOTULabel);

        // Create the trace for belly button data
    var trace1 = {
        x: sampleValues,
        y: sampleOTUID,
        text: sampleOTULabel,
        name: "Bacteria",
        type: "bar",
        orientation: "h"
    };

    // specify chart data
    var chartData = [trace1];

    // Apply the group bar mode to the layout
    var layout = {
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        },
        height: 500,
        width: 700
    };

    // Render the plot to the appropriate div tag
    Plotly.newPlot("bar", chartData, layout);

    var trace2 = {
        x: firstElement.otu_ids,
        y: firstElement.sample_values,
        text: firstElement.otu_labels,
        mode: "markers", marker: {
            color: firstElement.otu_ids,
            size: firstElement.sample_values
        }
    }

    // specify chart data
    var bubbleChartTrace = [trace2];

    // Apply the group bar mode to the layout
    var layout2 = {
        title: "Belly Button Bubble Chart"
    };

    // Render the plot to the appropriate div tag
    Plotly.newPlot("bubble", bubbleChartTrace, layout2);
});
};