      // 1. Create the trace for the bubble chart.
      var bubbleData = [{
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuIds,
          colorscale: "Earth"
        }
      }];
      console.log(bubbleData);
      // 2. Create the layout for the bubble chart.
      var bubbleLayout = {
        title: 'Bacteria Cultures Per Sample',
        showlegend: false,
        xaxis: {title: "OTU ID", automargin: true},
        yaxis: {automargin: true},
        //margin: { t: 50, r: 50, l: 50, b: 50 },
        hovermode: "closest"
      };
      console.log(bubbleLayout);
  
      // 3. Use Plotly to plot the data with the layout.
