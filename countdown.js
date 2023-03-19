var countDownDate = new Date("2023-04-17").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.ceil(distance / (1000 * 60 * 60 * 24));

  document.getElementById("cd").innerHTML = days + " days";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cd").innerHTML = "EXPIRED";
  }
}, 86400000);
