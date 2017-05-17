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

Store.prototype.addDataToTable = function() {
  var dataStartingArray = [];
  var dataTurnsIntoString;
  var dataStringToArray = [];

  dataStartingArray.push('<td>' + this.name + '</td>');

  for (var i = 0; i < this.cookiesHourlySales.length; i++) {
    dataStartingArray.push('<td>' + this.cookiesHourlySales[i] + '</td>');
  }

  dataStartingArray.push('<td>' + this.totalSum + '</td>');

  dataTurnsIntoString = dataStartingArray.join('');
  dataStringToArray = dataTurnsIntoString.split();

  // console.log(dataStringToArray);

  var new_row;
  var table = document.getElementById('shell');

  for (var j = 0; j < dataStringToArray.length; j++) {
    new_row = document.createElement('tr');
    new_row.innerHTML = dataStringToArray[j];
    table.appendChild(new_row);
  }
};

function addHeaderDataToTable() {
  var dataStartingArray = [];
  var dataTurnsIntoString;
  var dataStringToArray = [];

  dataStartingArray.push('<td>' + '</td>');
  for (var i = 0; i < this.hoursOfOperation.length; i++) {
    if (i < 5) {
      dataStartingArray.push('<td>' + this.hoursOfOperation[i] + ':00 AM' + '</td>');
    } else if (i > 5) {
      dataStartingArray.push('<td>' + this.hoursOfOperation[i] + ':00 PM' + '</td>');
    } else if (i === 5) {
      dataStartingArray.push('<td>' + this.hoursOfOperation[i] + ':00 PM' + '</td>');
    }
  }

  dataStartingArray.push('<td>' + 'Daily Location Total' + '</td>');

  dataTurnsIntoString = dataStartingArray.join('');
  dataStringToArray = dataTurnsIntoString.split();

  console.log(dataTurnsIntoString);
  console.log(dataTurnsIntoString.length);
  console.log(dataStringToArray);
  console.log(dataStringToArray.length);

  var new_row;
  var table = document.getElementById('shell-head');

  for (var j = 0; j < dataStringToArray.length; j++) {
    new_row = document.createElement('tr');
    new_row.innerHTML = dataStringToArray[j];
    table.appendChild(new_row);
  }
}


// total sum of all stores by hour

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
//
// Store.prototype.addFooterDataToTable = function() {
//   var dataStartingArray = [];
//   var dataTurnsIntoString;
//   var dataStringToArray = [];
//
//   dataStartingArray.push('<td>' + 'Totals' + '</td>');
//   console.log('anything here? ' + totalSumByHour);
//
//   for (var i = 0; i < totalSumByHour.length; i++) {
//     dataStartingArray.push('<td>' + totalSumByHour[i] + '</td>');
//   }
//
//   dataTurnsIntoString = dataStartingArray.join('r');
//   dataStringToArray = dataTurnsIntoString.split();
//
//   console.log(dataStringToArray);
//
//   var new_row;
//   var tableFooter = document.getElementById('shell-foot');
//
//   for (var j = 0; j < dataStringToArray.length; j++) {
//     new_row = document.createElement('tr');
//     new_row.innerHTML = dataStringToArray[j];
//     tableFooter.appendChild(new_row);
//   }
// };

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
    locations[i].addDataToTable();
    // locations[i].addFooterDataToTable();
  }
  addHeaderDataToTable();
  storeSalesByHour();
}

render();
