function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  // Initialize the dashboard
  init();

function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`)
    
      });
    });
  } 
    // 1. Create the buildCharts function.
function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
      // 3. Create a variable that holds the samples array. 
        console.log(data);
        var samplesArray = data.samples;
        console.log(samplesArray);
      // 4. Create a variable that filters the samples for the object with the desired sample number.
        var sampleId = samplesArray.filter(data => data.id == sample);
        console.log(sampleId);
      //  5. Create a variable that holds the first sample in the array.
      var firstSample = sampleId[0];
      console.log(firstSample);
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
      var otuIds = firstSample.otu_ids;
      var otuLables = firstSample.otu_lables;
      var sampleValues = firstSample.sample_values;
      
      console.log(otuIds);
      console.log(otuLables);
      console.log(sampleValues);
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
      var yticks = otuIds.slice(0,10).map(id => "OTU" + id).reverse();
      console.log(yticks);
      // 8. Create the trace for the bar chart. 
      var barData = [{
        x: sampleValues.slice(0,10).reverse(),
        text: otuLables.slice(0,10).reverse(),
        type: "bar"
      }];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
        title: "Top 10 Bacteria Cultures Found",
        yaxis: {
          tickmode: "array",
          tickvals: [0,1,2,3,4,5,6,7,8,9,10],
          ticktexts: yticks
        },
       
        annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          xanchor: 'center',
          y: -0.25,
          yanchor: 'center',
          text: 'The bar chart displays the top 10 bacterial species (OTUs)<br>with the number of samples found in your belly button',
          showarrow: false
        }]
    };
});
    }


 // 10. Use Plotly to plot the data with the layout. 
Plotly.newPlot("bar", barData, barLayout, {responsive: true});
