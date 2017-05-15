var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  operatingHours: 14,
  avgSalesPerCust:6.3,
  projectedSalesPerHourPerDay: function() {
    for (var i = 0; i < operatingHours; i++) {
      var cookiesSoldPerHour = Math.floor(Math.Random() * (this.maxCust - this.minCust)) + this.minCust;
      projectedCookiesSoldperHour[i].push(cookiesSoldPerHour);
    }
  },
  projectedCookiesSoldperHour = [],
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,

};

var seattleCenter = {
    minCust: 11,
    maxCust: 38,
    avgSalesPerCust: 3.7,

};

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust:2.3,

};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,

};
