var firstAndPike = {
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

firstAndPike.projectedSalesPerHour();
firstAndPike.projectedSumOfCookies();
firstAndPike.projectedCookiesSoldPerDay;
firstAndPike.projectedSumOfCookiesSoldPerDay;

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  projectedCookiesSoldPerDay: [],
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log(cookiesSoldPerHour);
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 3.7,
  projectedCookiesSoldPerDay: [],
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log(cookiesSoldPerHour);
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  }

};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust:2.3,
  projectedCookiesSoldPerDay: [],
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log(cookiesSoldPerHour);
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,
  projectedCookiesSoldPerDay: [],
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      console.log(cookiesSoldPerHour);
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  }
};
