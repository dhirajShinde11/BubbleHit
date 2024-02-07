var scoreval =0;
var setTimer = 5;
var randomHit;
function makeBubble(){
    var clutter = ""
for(i = 0 ; i<220 ; i++){
    var rn= Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector(".pbtm").innerHTML = clutter;
}

function timer(){

    var sI = setInterval(function(){
        if(setTimer > 0){
            setTimer--;
            document.querySelector(".timerBox").textContent = setTimer;
        }else{
            document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER</h1>`;
            document.querySelector(".pbtm").style.backgroundColor = "black";
            clearInterval(sI) 
        }
    },1000)
}

function hit(){
     randomHit = Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent = randomHit;
}

function score(){
    
    scoreval += 10;
    document.querySelector(".scoreVal").innerHTML = scoreval;

}


   document.querySelector(".pbtm").addEventListener("click",function(dets){
        var clickedVal=Number(dets.target.textContent);
        if(clickedVal === randomHit){
            score();
            makeBubble();
            hit();
        }
        else{
          alert("Wrong Hit!")
        }
    })




hit();
timer();
makeBubble();
score();
