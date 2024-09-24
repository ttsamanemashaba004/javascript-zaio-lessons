// push & pop => end of the list

const fruits = ['Apple','Pineapple','Watermelon','Pear'];
fruits.push('Orange');
fruits.push('Grapes');


fruits.pop();


//shift unshift => start of the list
fruits.unshift('Coconut');
fruits.shift('Coconut');

// finding the index of an element
const watermelonIndex = fruits.indexOf('Watermelon');
console.log(watermelonIndex);
fruits[watermelonIndex] = 'green watermelon'; // editing an element.

// find the index of the last element

const lastElementIndex = fruits.length -1;
console.log(lastElementIndex);
console.log(fruits);

// CHECK IS AN ELEMENT EXISTS IN AN ARRAY

console.log(fruits.includes('watermelon')) // output: FALSE