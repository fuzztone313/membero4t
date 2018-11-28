$(function(){
    listOne();
    listTwo();
    listThree();
    listFour();
    listFive();
});
function listOne() {
   new Chart(document.getElementById("listChartOne"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(21, 170, 148, 0.7)',
            borderColor: "rgba(21, 170, 148, 0.7)",
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
function listTwo() {
   new Chart(document.getElementById("listChartTwo"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(21, 170, 148, 0.7)',
            borderColor: "rgba(21, 170, 148, 0.7)",
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
function listThree() {
   new Chart(document.getElementById("listChartThree"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(21, 170, 148, 0.7)',
            borderColor: "rgba(21, 170, 148, 0.7)",
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
function listFour() {
   new Chart(document.getElementById("listChartFour"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(21, 170, 148, 0.7)',
            borderColor: "rgba(21, 170, 148, 0.7)",
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
function listFive() {
   new Chart(document.getElementById("listChartFive"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(21, 170, 148, 0.7)',
            borderColor: "rgba(21, 170, 148, 0.7)",
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
