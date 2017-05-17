function Store(name, minCust, maxCust, avgSalesPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8 ];
  this.cookiesHourlySales = [];
  this.totalSum = 0;
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

Store.prototype.addToTable = function() {
  var dataInArray = [];
  var dataRepushedInArr = [];
  var dataAsAString;
  var table = document.getElementById('shell');

  dataInArray.push('<td>' + this.name + '</td>');

  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    dataInArray.push('<td>' + this.cookiesHourlySales[i] + '</td>');
  }

  dataAsAString = dataInArray.join('');
  dataRepushedInArr = dataAsAString.split();

  // console.log(dataInArray);
  console.log(dataRepushedInArr);
  // console.log(dataAsAString);

  var new_row;

  for (var j = 0; j < dataRepushedInArr.length; j++) {
    new_row = document.createElement('tr'); // 'for each in data array, I want to make a new row'
    new_row.innerHTML = dataRepushedInArr[j];
    table.appendChild(new_row);
  }


};




var totalSumByHour = [];

function storeSalesByHour() {
  for (var i = 0; i < locations.length; i++) {
    for (var j = 0; j < locations[i].cookiesHourlySales.length; j++) {
      if (i === 0) {
        totalSumByHour.push(locations[i].cookiesHourlySales[j]);
      } else if (i > 0) {
        totalSumByHour[j] = totalSumByHour[j] + locations[i].cookiesHourlySales[j];
      }
    }
  }
}

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var locations = [firstAndPike, seaTacAirport, seattleCenter, capHill, alki];

function render() {
  for (var i = 0; i < locations.length; i++) {
    locations[i];
    locations[i].salesPerHour();
    locations[i].salesSum();
    locations[i].addToTable();
  }
  storeSalesByHour();
}

render();
