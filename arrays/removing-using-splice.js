// removing elements from an array

const fruits = ['Apple','Pineapple','Watermelon','Pear'];
const watermelonIndex = fruits.indexOf('Watermelon');
fruits.splice(watermelonIndex, 1);
console.log(fruits);