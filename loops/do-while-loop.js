// DO While
// This loop is always executed atleast once
// the code block is executed before the condition is tested

const text = 'tinyiko tsamane'
let i = 0;
let finalValue = "";

do {
    finalValue += text.charAt(i).toUpperCase();
    i++;
}while(i < text.length);

console.log(finalValue);