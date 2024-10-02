// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

let container = document.getElementById("container");
let display_txt = document.getElementById("display_txt");

// adding a keydown event listener to the document :---
document.addEventListener("keydown", function (e) {
  display_txt.style.color = "red";
  display_txt.innerText = e.key + " is keyDown";
});

// adding a keyup event listener to the document :---
document.addEventListener("keyup", function (e) {
  display_txt.style.color = "green";
  display_txt.innerText = e.key + " is keyUp";
});
