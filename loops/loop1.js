// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again,
// each time with a different value.

//Mkae a string to uppercase using the .charAt function

// for, while, do while

const text =  "tinyiko tsamane";
let newText = ""
for(let i = 0; i < text.length; i++){
    newText = newText + text.charAt(i).toUpperCase();
}

console.log(newText);