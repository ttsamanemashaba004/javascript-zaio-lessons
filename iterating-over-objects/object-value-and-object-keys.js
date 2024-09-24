const expenses = {
    rent: 1000,
    food: 2000,
    movies: 1500
}

// console.log(Object.keys(expenses), Object.values(expenses))

// console.log(Object.values(expenses).reduce((acc, item) => acc += item, 0))

const keys = Object.keys(expenses);
const values = Object.values(expenses);

for(let i=0; i<keys.length; i++){
    console.log(keys[i], values[i])
}