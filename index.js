
var buttons=document.querySelectorAll(".drum");


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",clickHandle);
}



function clickHandle(){
    this.style.color="black"
    
}





//var sound= new Audio("sounds/crash.mp3");
//    sound.play();