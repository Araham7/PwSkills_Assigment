let x = 0 ;

// Setting the initial value of the counter zero(0) . 
let set_value = document.querySelector(".Show_val");
set_value.innerText = x ;
console.log(set_value.innerText);


// decreasing the value of a counter :---
let decrement_btn = document.querySelector(".decrement_btn");
decrement_btn.addEventListener("click" , decrese_val);
function decrese_val() {
    x = x-1 ;
    // document.querySelector(".Show_val").innerText= x ;
    set_value.innerText = x ;
    console.log(x);
}



// increasing the value of the counter :---
let increment_btn = document.querySelector(".increment_btn");
increment_btn.addEventListener("click" , increase_val);
function increase_val() {
    x = x+1 ;
    set_value.innerText= x ;
    console.log(x);
    
}



// resetting the value of the counter :---
let reset_btn = document.querySelector(".reset_btn");
reset_btn.addEventListener("click" , reset_val);
function reset_val() {
    x = 0 ;
    set_value.innerText = x ;
    console.log(x);
}
