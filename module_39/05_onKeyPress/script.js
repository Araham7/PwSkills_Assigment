//keypress

// The keypress event is fired when a key that produces a character value is pressed down.



let inputBox = document.getElementById('input-box');
let display = document.getElementById('display_txt');


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="You have Pressed > " + e.key
})