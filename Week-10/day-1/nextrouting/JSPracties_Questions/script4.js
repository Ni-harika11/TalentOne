function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  
  // Example usage:
  console.log(chunkArray([1, 2, 3, 4, 5], 2)); 
  // Output: [[1, 2], [3, 4], [5]]
  