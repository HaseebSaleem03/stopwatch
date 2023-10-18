var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourheading = document.getElementById("hour");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
var interval ;
function timer(){
    msec++;
    msecheading.innerHTML = msec;
    if(msec >= 60){
      sec++
      secheading.innerHTML = sec ;
      msec = 0;
    }
    else if(sec>=60){
        min++
        minheading.innerHTML = min
        sec = 0;
    }
    else if(min>=60){
      hour++
      hourheading.innerHTML = hour
      min = 0;
    }
    
}

function start() {
  var start = document.getElementById("startbtn");
  interval = setInterval(timer, 10);
}

function pause() {
  var start = document.getElementById("startbtn");
  clearInterval(interval);

}
function reset(){
var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hourheading = document.getElementById("hour");
var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");
}