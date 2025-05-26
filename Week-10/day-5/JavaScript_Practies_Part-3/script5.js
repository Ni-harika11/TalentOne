// 5. Custom Map Function
//  Description: Re-implement the native Array.prototype.map() method.
//  Example Usage: [1,2,3].myMap(x => x * 2)
//  Concepts: Array, prototype, callback functions

function mapfunct(){
    const arra=[1,2,4,4]
    console.log(arra)
    const newarr=arra.map(x=>x*2)
    console.log(newarr)
}
// mapfunct()
function myfunction(newdata){
    // const newdata=[1,2,3,4,5]
    console.log(newdata)
    const Custom=newdata.mapfunct(val=>val*3)
    console.log(Custom)
}
const newdata=[3,4,5,6]
myfunction(mapfunct(newdata))














// // Step 1: Define custom map on Array prototype
// Array.prototype.myMap = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this)); // value, index, array
//     }
//     return result;
// };

// // Step 2: Use it like native .map
// const original = [1, 2, 3, 4];
// const doubled = original.myMap(x => x * 2);

// console.log("Original:", original);
// console.log("Custom mapped:", doubled);
