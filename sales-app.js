var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  operatingHours: 14,
  avgSalesPerCust:6.3,
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  }
};

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  }
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 3.7,
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  }
};

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust:2.3,
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  }
};

var alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  }
};

function listProjectedHourlyAndSum() {
  var container = document.createElement('div');
  container.innterHTML = '<h3>' + this.name + '</h3>';
  document.body.appendChild(container);
}

listProjectedHourlyAndSum()



firstAndPike.projectedSalesPerHour();
firstAndPike.projectedSumOfCookies();

seaTacAirport.projectedSalesPerHour();
seaTacAirport.projectedSumOfCookies();

seattleCenter.projectedSalesPerHour();
seattleCenter.projectedSumOfCookies();

capHill.projectedSalesPerHour();
capHill.projectedSumOfCookies();

alki.projectedSalesPerHour();
alki.projectedSumOfCookies();
