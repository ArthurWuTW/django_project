// Area Chart Example
var ctx6 = document.getElementById("chart_webserver_mem");
var chart6 = new Chart(ctx6, {
        type:'line',
        data: {
          labels: connections_data_webserver_mem['timestamp_array'],
          datasets: [{
            lineTension: 0,
            label: 'Number of Connections',
            data: connections_data_webserver_mem['connections_array'],
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
          elements: { point: { radius: 0 } },
          tooltips: {enabled: false},
          hover: {mode: null},
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
                    suggestedMin: 0,
                    suggestedMax: 5
                  }
                }
              ]
            }
          }
});


setInterval(function(){
  $.ajax({
    headers: {'X-CSRFToken': csrftoken},
    type: "POST",
    url: update_connection_path,
    data: {'server_name': 'WebServerMemPercentage'},
  }).done(function(response){
        chart6 = new Chart(ctx6, {
            type:'line',
            data: {
              labels: JSON.parse(response['data'])['timestamp_array'],
              datasets: [{
                lineTension: 0,
                label: 'Number of Connections',
                data: JSON.parse(response['data'])['connections_array'],
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
              elements: { point: { radius: 0 } },
              tooltips: {enabled: false},
              hover: {mode: null},
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
                        suggestedMin: 0,
                        suggestedMax: 5
                      }
                    }
                  ]
                }
              }
            });
  })
}, 60000);
