var ColumnChart = function() {

  var container = document.getElementById("chart");
  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container,  
    },
    title: {
      text: "Infection Rates from 19th Century to Present Day",
    },
    series: [{
      name: "Tuberculosis",
      data: [20, 15, 0]
    }, 
    {
      name: "Smallpox", 
      data: [20, 15, 0]
    },
    {
      name: "Zika", 
      data: [0, 5, 20]
    },
    {
      name: "HIV/AIDS",
      data: [0, 15, 20]
    }
    ],
  xAxis: {
      categories: ["19th Century", "20th Century", "Present Day"]
  }
  });
}