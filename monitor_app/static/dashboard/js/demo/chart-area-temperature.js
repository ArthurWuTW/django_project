// Area Chart Example
var ctx = document.getElementById("chart_temp");
var chart = new Chart(ctx, {
        type:'line',
        data: {
          labels: temp_data['timestamp_array'],
          datasets: [{
            label: 'Temperature',
            data: temp_data['temp_array'],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',

            ],
            borderColor: [
              'rgba(255,99,132,1)',
            ],
            borderWidth: 1
          }]
        },
        options:{
          maintainAspectRatio:false,
          legend:{
            display:false
          },
          title:{},
          scales:{
            xAxes:[
              {
                  ticks:{
                    fontColor:'#858796',
                    padding:20,
                    autoSkip: true,
                    maxTicksLimit: 20,
                  }
                }
              ],
              yAxes:[
                {
                  gridLines:{
                    color:'rgb(234, 236, 244)',
                    zeroLineColor:'rgb(234, 236, 244)',
                    drawBorder:false,
                    drawTicks:false,
                    borderDash:[2],
                    zeroLineBorderDash:[2]
                  },
                  ticks:{
                    fontColor:'#858796',
                    padding:5,
                    suggestedMin: 20,
                    suggestedMax: 34
                  }
                }
              ]
            }
          }
});
