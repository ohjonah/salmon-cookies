var table = document.getElementById('shell');

function Store(name, minCust, maxCust, avgSalesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8 ];
  this.cookiesHourlySales = [];
  this.totalSum = 0;
  this.salesPerHour();
  this.salesSum();
  this.createTableExisting();
}

Store.prototype.salesPerHour = function() {
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    this.cookiesHourlySales.push(cookiesSoldPerHour);
  }
};

Store.prototype.salesSum = function () {
  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    this.totalSum += this.cookiesHourlySales[i];
  }
};

Store.prototype.storeSalesByHour = function() {
  var totalSumByHour = [];

  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    if (i === 0) {
      totalSumByHour.push(this.cookiesHourlySales[i]);
    } else if (i > 0) {
      totalSumByHour[i] = totalSumByHour[i] + this.cookiesHourlySales[i];
    }
  }
};


Store.prototype.createTableExisting = function() {
  var data = [];
  data.push('<td>' + this.name + '</td>');

  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    data.push('<td>' + this.cookiesHourlySales[i] + '</td>');
  }
  data.push('<td>' + this.totalSum + '</td>');
  createTable(data);
};


function createTable(data) {
  var row;
  var dataTurnsIntoString = data.join('');
  var dataArray = dataTurnsIntoString.split('  ');

  for (var i = 0; i <dataArray.length; i++) {
    row = document.createElement('tr');
    row.innerHTML = dataArray[i];
  }
  table.appendChild(row);
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTacAirport, seattleCenter, capHill, alki];

var form = document.getElementById('main_form');
var newData;

function formData(e) {
  e.preventDefault();

  var store_name = event.target.store_name.value;
  var min_cust = event.target.min_cust.value;
  var max_cust = event.target.max_cust.value;
  var avg_sales_cust = event.target.avg_sales_cust.value;

  newData = new Store(store_name, min_cust, max_cust, avg_sales_cust);
}

Store.prototype.parseNewData = function() {
  newData.push('<td>' + this.name + '</td>');

  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    newData.push('<td>' + this.cookiesHourlySales[i] + '</td>');
  }
  newData.push('<td>' + this.totalSum + '</td>');
  createTable(newData);
  form.reset();
};

// function render() {
//   for (var i = 0; i < locations.length; i++) {
//     locations[i].createTableExisting();
//   }
// }
//
// render();

form.addEventListener('submit', formData);
