var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgSalesPerCust: 6.3,
  operatingHoursArr: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  },
  listNameAndUlInDom: function() {
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

var seaTacAirport = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgSalesPerCust: 1.2,
  operatingHoursArr: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  },
  listNameAndUlInDom: function() {
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

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgSalesPerCust: 3.7,
  operatingHoursArr: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  },
  listNameAndUlInDom: function() {
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

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgSalesPerCust:2.3,
  operatingHoursArr: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  },
  listNameAndUlInDom: function() {
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

var alki = {
  name: 'Alki Beach',
  minCust: 2,
  maxCust: 16,
  avgSalesPerCust: 4.6,
  operatingHoursArr: [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
  projectedCookiesSoldPerDay: [],
  projectedSumOfCookiesSoldPerDay: 0,
  projectedSalesPerHour: function() {
    for (var i = 0; i < this.operatingHoursArr.length; i++) {
      var cookiesSoldPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
      this.projectedCookiesSoldPerDay.push(cookiesSoldPerHour);
    }
  },
  projectedSumOfCookies: function() {
    for (var i = 0; i < this.projectedCookiesSoldPerDay.length; i++) {
      this.projectedSumOfCookiesSoldPerDay += this.projectedCookiesSoldPerDay[i];
    }
  },
  listNameAndUlInDom: function() {
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

firstAndPike.projectedSalesPerHour();
firstAndPike.projectedSumOfCookies();
firstAndPike.listNameAndUlInDom();

seaTacAirport.projectedSalesPerHour();
seaTacAirport.projectedSumOfCookies();
seaTacAirport.listNameAndUlInDom();

seattleCenter.projectedSalesPerHour();
seattleCenter.projectedSumOfCookies();
seattleCenter.listNameAndUlInDom();

capHill.projectedSalesPerHour();
capHill.projectedSumOfCookies();
capHill.listNameAndUlInDom();

alki.projectedSalesPerHour();
alki.projectedSumOfCookies();
alki.listNameAndUlInDom();
