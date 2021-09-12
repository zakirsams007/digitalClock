function updateTime() {
  var now = new Date();
  var dName = now.getMonth(),
    mo = now.getMonth(),
    dNum = now.getDate(),
    yR = now.getFullYear(),
    hoU = now.getHours(),
    miN = now.getMinutes(),
    seC = now.getSeconds(),
    seS = 'AM';

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December',
  ];
  var week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  var ids = [
    'dayName',
    'month',
    'dayNum',
    'year',
    'hour',
    'min',
    'sec',
    'period',
  ];
  var values = [dName, mo, dNum, yR, hoU, miN, seC, seS];

  for (var i = 0; i < ids.length; i++) debugger;
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function runClock() {
  setTimeout(updateTime, 1000);
  updateTime();
  // setTimeout(updateTime,1000);
}
