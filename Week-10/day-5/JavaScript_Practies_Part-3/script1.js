// 1. Deep Clone an Object
//  Description: Write a function to deep clone a nested JavaScript object without using structuredClone or lodash.
//  Example Input:
// const obj = { a: 1, b: { c: 2 } };

// Expected Output:
// { a: 1, b: { c: 2 } } // New object, not a reference

// Concepts: Recursion, Object, Array, reference handling
const obj={
    a:1,
    b:{c:2}
}
const newobj=structuredClone(obj)
console.log(obj===newobj)
console.log(obj.b===newobj.b)