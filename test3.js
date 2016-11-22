/*Joseph Sanchez // CS81 // TEST3 // Javascript */
var imgObj = null; // imgObj will be loaded on start
var w = parseInt(window.innerWidth); //Gets the width of the window
var interval1; // used for setInterval function

/*called by window.onload and loads imgObjc with the robot image
as well as positions it */
function init(){
    imgObj = document.getElementById('robot');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';

}
/*moveRight checks to see if the image is too far to the right
(as defined by var w) and if it is not, it moves it to the right, if not
it resets the image to .style.left="0px" at the left of the page */
function moveRight(){
    if ((parseInt(imgObj.style.left)) < w){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }
    else if ((parseInt(imgObj.style.left))>=w ){
        imgObj.style.left ='0px';
    }
}
//stopSliding both clears the interval used and calls changeButton()
function stopSliding(){
    clearInterval(interval1);
    changeButton();
}
/*This function changes both the value and .onclick action based
on the initial value*/
function changeButton(){
    if (document.getElementById("button1").value=="Start"){
        document.getElementById("button1").value="Stop";
        document.getElementById("button1").onclick=stopSliding;
    } else if (document.getElementById("button1").value=="Stop") {
        document.getElementById("button1").value="Start";
        document.getElementById("button1").onclick=slideRight;
    }
}

//slideRight works automatically at the interval of 50 miliseconds
function slideRight() {
    interval1 = setInterval(moveRight,50);
    changeButton();
}
//calls init
window.onload =init;