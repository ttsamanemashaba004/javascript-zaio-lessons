console.log("HI")
// darkmode: black
//sunmode: yellow
//skymode: blue

const darkmode = false;
const skymode = false;
const sunmode = false;

if(darkmode)
    document.body.style.background = "black";
else if(skymode)
    document.body.style.background = "blue";
else
    document.body.style.background = "yellow";

console.log("done")