// 2. Flatten a Nested Array
//  Description: Write a function to flatten a deeply nested array into a single-level array.
//  Example Input: [1, [2, [3, 4], 5]]
//  Expected Output: [1, 2, 3, 4, 5]
//  Concepts: Recursion, Array, spread operator, loops

function flattenArray(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            result.push(...flattenArray(item)); // Recursively flatten
        } else {
            result.push(item); // Push primitive value
        }
    }

    return result;
}

const original_array = [1, [2, [3, 4], 5]];
const flattened = flattenArray(original_array);
console.log("Flattened array:", flattened);
