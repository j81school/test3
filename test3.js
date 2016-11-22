/**
 * Created by ph0 on 11/21/16.
 */
var imgObj = null;
var w = parseInt(window.innerWidth);
var intv;
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';

}

function moveRight(){
    if ((parseInt(imgObj.style.left)) < w){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }
    else if ((parseInt(imgObj.style.left))>=w ){
        imgObj.style.left ='0px';
    }
}

function stopSliding(){
    clearInterval(intv);
    changeButton();
}
function changeButton(){
    if (document.getElementById("button1").value=="Start"){
        document.getElementById("button1").value="Stop";
        document.getElementById("button1").onclick=stopSliding;
    } else if (document.getElementById("button1").value=="Stop") {
        document.getElementById("button1").value="Start";
        document.getElementById("button1").onclick=slideRight;
    }
}
function slideRight() {
    intv = setInterval(moveRight,50);
    changeButton();
}


window.onload =init;