var UI = require('./views/ui')

var initialize = function() {
  new UI();
  new ColumnChart();
}

window.onload = initialize;