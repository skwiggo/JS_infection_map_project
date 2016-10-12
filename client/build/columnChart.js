var ColumnChart = function() {

  var container = document.getElementById("chart");
  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container,  
    },
    title: {
      text: "Country Infection Rates from 19th Century to the 22nd Century",
    },
    series: [{
      name: "Tuberculosis",
      data: [8, 15, 9, 0]
    }, 
    {
      name: "Smallpox", 
      data: [20, 0, 0, 0]
    },
    {
      name: "Zika", 
      data: [0, 5, 15, 0]
    },
    {
      name: "HIV/AIDS",
      data: [0, 15, 20, 0]
    },
    {
      name: "Zombies!",
      data: [0, 0, 0, 50]
    }
    ],
  xAxis: {
      categories: ["19th Century", "20th Century", "Present Day", "22nd Century"]
    },
  yAxis: {
    title: {
      text: "Number of Infected Countries"
    }
  }
  });
}