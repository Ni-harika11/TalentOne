// 2. Chunk an Array
//  Description: Write a function that splits an array into chunks of a specified size.
//  Example Input: ([1, 2, 3, 4, 5], 2)

//  Expected Output: [[1, 2], [3, 4], [5]]
//  Concepts: Array, loop, slice, push
 
const array=([1, 2, 3, 4, 5]);
const subarray=array.slice(1,3)
const newary={}
const nedata=array.push(subarray,2)
console.log(subarray )
console.log(nedata )


for (let i=0; i < array.length; i++){
     const varl=array[i].slice(1,3)
    //  const neval=varl.slice(1,3)
     console.log(varl)
    // const newdata=array.slice(1,3)
     // console.log(newdata[i])
}
 
