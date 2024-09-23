// console.log("*");
// console.log("* *");
// console.log("* * *");
// console.log("* * * *");
// console.log("* * * * *");
// console.log("* * * * * *")

// write  for loop to print out the triangle

for(let i=0; i<6; i++){
    let output = "";
    for(let j=0; j<i+1; j++){
        output = output + "* ";
        
    }
    console.log(output);
}
