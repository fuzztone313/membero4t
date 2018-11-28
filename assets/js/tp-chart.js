$(function(){
    tpTrioOne();
    tpTrioTwo();
    tpTrioThree();
    profilReport();
});
function tpTrioOne() {
   new Chart(document.getElementById("tpChartOne"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: "rgba(255, 255, 255)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function tpTrioTwo() {
   new Chart(document.getElementById("tpChartTwo"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: "rgba(255, 255, 255)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function tpTrioThree() {
   new Chart(document.getElementById("tpChartThree"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: "rgba(255, 255, 255)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function profilReport() {
    new Chart(document.getElementById("pr-chart"), {
    type: 'bar',
    data: {
      labels: ["0k", "5k", "10k", "15k", "20k", "25k"],
      datasets: [{
          label: "Balance",
          type: "line",
          data: [0,11,15,5,7,15],
          backgroundColor: 'rgba(121, 199, 57, 0.7)',
          borderColor: "rgba(121, 199, 57, 0.7)",
          fill: true
        }, {
          label: "Equity",
          type: "line",
          data: [10,17,19,20,5,11],
          backgroundColor: 'rgba(160, 242, 94, 0.7)',
          borderColor: "rgba(160, 242, 94, 0.7)",
          fill: true
        }, {
          label: "Cash Flow",
          type: "line",
          data: [8,15,21,18,19,9],
          backgroundColor: 'rgba(255, 255, 255)',
          borderColor: "rgb(255, 255, 255)",
          fill: false
        }, {
          label: "Margin",
          type: "line",
          data: [18,12,16,18,20,15],
          backgroundColor: 'rgba(129, 129, 129)',
          borderColor: "rgb(129, 129, 129)",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false
      },
      legend: { 
        display: true,
        position: 'bottom'  
      },
      scales: {
        yAxes: [{
            ticks: {
                callback: function(value) {
                return value + "k"
                }
            },
                scaleLabel: {
                display: true,
                labelString: "Margin"
            }
        }]
     }
    }
});
}