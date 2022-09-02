      // 1. Create a variable that filters the metadata array for the object with the desired sample number.
      var metadata_SelId = data.metadata.filter(data => data.id == sample);
      console.log(metadata_SelId);  
  
      // 3. Create a variable that holds the washing frequency.
      var washFreq = +metadata_SelId[0].wfreq;
      
      // 4. Create the trace for the gauge chart.
      var gaugeData = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: washFreq,
          title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per week"},
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: {
              range: [null, 10],
              tickmode: "array",
              tickvals: [0,2,4,6,8,10],
              ticktext: [0,2,4,6,8,10]
            },
            bar: {color: "black"},
            steps: [
              { range: [0, 2], color: "red" },
              { range: [2, 4], color: "orange" },
              { range: [4, 6], color: "yellow" },
              { range: [6, 8], color: "lime" },
              { range: [8, 10], color: "green" }]
          }
        }
      ];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
        autosize: true,
        annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0.5,
          xanchor: 'center',
          y: 0,
          yanchor: 'center',
          text: "The gauge displays your belly button weekly washing frequency",
          showarrow: false
        }]
      };
  
      // 6. Use Plotly to plot the gauge data and layout.
      Plotly.newPlot("gauge", gaugeData, gaugeLayout, {responsive: true});

