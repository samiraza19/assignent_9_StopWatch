var hourHeadig = document.getElementById("hour")
var minHeadig = document.getElementById("min")
var secHeadig = document.getElementById("sec")
var msecHeadig = document.getElementById("msec")

var hour = 0 
var min = 0
var sec = 0
var msec = 0
var Interval;

function timer(){
  msec++
  msecHeadig.innerHTML=msec
  if(msec>=100){
    sec++
    secHeadig.innerHTML=sec + ": "
    msec=0
  }
  else if(sec>=60){
    min++
    minHeadig.innerHTML=min + ": "
    sec=0
  }
  else if(min>=60){
    hour++
    hourHeadig.innerHTML=hour + ": "
    min=0
  }
}




function Start(){
  Interval= setInterval(timer,10)
  document.getElementById("start").disabled = true;
}

function Stop(){
 clearInterval(Interval)
 document.getElementById("start").disabled = false;
}

function Reset(){
 hour = 0 
 min = 0
 sec = 0
 msec = 0

 hourHeadig.innerHTML=0 + ":"
 minHeadig.innerHTML=0 + ":"
 secHeadig.innerHTML=0 + ":"
 msecHeadig.innerHTML=0 

 Stop()
}