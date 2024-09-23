// Primitive
// Undefined, null, boolean, number, string, symbol

// Objects allow us to manage structures of primitives

// console.log("tinyi" === "tinyi");

// const obj = { name: "tinyi"}
// const obj2 = { name: "tinyi"}

// console.log(obj === obj2) // comparing the same objects but get output of false. Why?

// Objects are reference types, we comparing the memory or address of the object.
// Since the objects are in different addresses that is why I get false.

const n = "tinyi";
const obj = {};
const obj2 = obj; //I am telling obj2 to reference to the address of obj
obj2.name = n; // this key that i create will me in the address of obj

console.log('obj',obj);
console.log('obj2',obj2);
console.log( obj === obj2);
