// Make a string to uppercase using the .chartAt function
const text = 'tinyiko tsamane'
let i = 0;
let finalValue = "";
while(i < text.length){
    finalValue += text.charAt(i).toUpperCase();
    i++;
}

console.log(finalValue);