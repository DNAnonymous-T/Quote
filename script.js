var timer;
var ele = document.getElementById('timer');
var eleread = document.getElementById('blue');
var eleclick=document.getElementById('green');
var elequick = document.getElementById('red');
var e  = document.getElementById('img');
var set = 1;
var min = 1;
var sec = 59;
var EndString = `Gelesen, gut.<br/><br/>
Nicht gelesen, Bester.<br/><br/>
Mögen Sie all das Glück und den Frieden finden, die Sie verdienen.&#128591; 28.08.2024<br/><br/>
"Jetzt, übersetzen!"`;

function visitOnlyOnce() {

    if (getCookie("username") != "") {
      display();
    } 
  }

(function (){

if(set > 0 ){
    
  timer = setInterval(()=>{
    if(set == 1){
      set =2;
      eleread.style.color = "blue";
      eleclick.style.color = "black";
      elequick.style.color = "black";
    }
    else if(set == 2){
      eleread.style.color = "black";
      eleclick.style.color = "green";
      elequick.style.color = "black";
        set =3;
    }else{
        eleread.style.color = "black";
      eleclick.style.color = "black";
      elequick.style.color = "red";
        set =1;
    }
    if (min > 0){
        min--;
      }

    if(sec>=10)
      {
    ele.innerHTML = '0'+min+':'+ sec;}
    else{
       ele.innerHTML = '0'+min+':'+ '0'+ sec;
    }
    
   if (sec > 0) {
         sec--;
     } else {
        disable();
     }
  }, 1000)
  // each 1 second
}else{disable();}

})()

//On click button
document.getElementById("btn").onclick= function() {
    disable();
 }

 //distrct everything
function disable(){
    e.style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById('content').innerHTML =EndString;
    sec = 0;
    min = 0;
    set = 0;
    if(getCookie("username")==""){
        setCookie("username","VJ",30);
    }
}

function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {let c = ca[i];
      while (c.charAt(0) == ' ') {c = c.substring(1);}
      if (c.indexOf(name) == 0) {return c.substring(name.length, c.length);}}
    return "";
  }
  
  
