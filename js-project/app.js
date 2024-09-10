var timer=30;
var hitrn=0;
var score = 0;

function makebubble(){
    var clutter="";

   for(var i=1; i<=147; i++ ){
    var rn=Math.floor(Math.random()*10)
    clutter += ` <div id="bubble">${rn}</div>`
   }

   document.querySelector("#bpanel").innerHTML=clutter
}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timeval").textContent=timer;
        }
        else{
           clearInterval(timerint);
           document.querySelector("#bpanel").innerHTML=`<h1>GAME OVER</h1>`
        }
    },1000)
    
}

function getnewhit(){
    hitrn=Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent=hitrn;
}

function IncreaseScore(){
    score += 10;
    document.querySelector(".scoreval").textContent=score;
}

document.querySelector("#bpanel").addEventListener("click", function(event){
    var clickno = Number(event.target.textContent);
    if(clickno === hitrn){
        IncreaseScore();
        getnewhit();
        makebubble();
    }

})

getnewhit();
makebubble();
runtimer();



