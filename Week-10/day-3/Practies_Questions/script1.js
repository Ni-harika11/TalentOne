// 4. Group Objects by Property
//  Description: Group an array of objects by a specific key (e.g., group people by age minimum with 10 data).
//  Example Input:
// [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Eve", age: 30 }
// ]

// Expected Output:
// {
//   25: [{ name: "Bob", age: 25 }],
//   30: [{ name: "Alice", age: 30 }, { name: "Eve", age: 30 }]
// }
// Concepts: Array, reduce, object manipulation

function groupofpepoledata() { 
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 25 },
        { name: 'David', age: 35 },
        { name: 'Eve', age: 30 },
        { name: 'Frank', age: 40 },
        { name: 'Grace', age: 25 },
        { name: 'Hannah', age: 35 },
        { name: 'Ian', age: 40 },
        { name: 'Jack', age: 30 }
      ];
const groupofpepole=Object.groupBy(people,person=>person.age)
console.log(groupofpepole)
 }
groupofpepoledata()

