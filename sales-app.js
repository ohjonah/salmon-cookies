function Store(name, minCust, maxCust, avgSalesPerCust, openHour, closeHour) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSalesPerCust = avgSalesPerCust;
  this.hoursOfOperation = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8 ];
  this.cookiesHourlySales = [];
  this.totalSum = this.salesSum();
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


var firstAndPike = new Store('1st and Pike', 23, 65, 6.3, 6, 20);
var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2, 6, 20);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7, 6, 20);
var capHill = new Store('Capitol Hill', 20, 38, 2.3, 6, 20);
var alki = new Store('Alki', 2, 16, 4.6, 6, 20);

var locations = [firstAndPike, seaTacAirport, seattleCenter, capHill, alki];

firstAndPike;
firstAndPike.salesPerHour();
firstAndPike.salesSum();
// seaTacAirport;
// seattleCenter;
// capHill;
// alki;


function listNameAndUlInDom(locations) {
    var container = document.createElement('div');
    container.innerHTML = '<h3>' + this.name + '</h3>';
    document.body.appendChild(container);

    var list = document.createElement('ul');
    var listArr = [];

    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      if (i < 5) {
        listArr.push('<li>' + this.operatingHoursArr[i] + ' am: ' + this.projectedCookiesSoldPerDay[i] + ' cookies' + '</li>');
      } else if (i > 5) {
        listArr.push('<li>' + this.operatingHoursArr[i] + ' pm: ' + this.projectedCookiesSoldPerDay[i] + ' cookies' + '</li>');
      } else if (i === 5) {
        listArr.push('<li>' + this.operatingHoursArr[5] + ' pm: ' + this.projectedCookiesSoldPerDay[i] + ' cookies' + '</li>');
      }
    }

    listArr.push('<li>' + 'Total: ' + this.projectedSumOfCookiesSoldPerDay + ' cookies' + '</li>');

    var fullList = listArr.join('');
    list.innerHTML = fullList;
    document.body.append(list);
  }
};
