var countDownDate = new Date("April 17, 2023 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerHTML = days + " days";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXAM IS ON";
  }
}, 86400000);
