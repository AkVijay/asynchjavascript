
var count = 0;
var started  = false;
var interval ;
var recordsArray = [];


function startStop(){

    if(started == false){
      interval = setInterval(function(){
        count += 100;
        document.getElementById("timer").innerHTML = parseFloat(count)/1000;
      },100);
      started = true
    }else{
      clearInterval(interval);
      started = false;
    }
}



function reset(){
    started = false;;
    count = 0;
    if(interval)
      clearInterval(interval);
    recordsArray = [];
    document.getElementById("timer").innerHTML="0";
    document.getElementById("recordTime").innerHTML ="";
}


function records(){

   recordsArray.push(document.getElementById("timer").innerHTML);
   var value  = "";
   recordsArray.forEach(function(element){
     value += "<br>" + element + "</br>"
   });
   document.getElementById("recordTime").innerHTML = value;

}
