// 5. Validate Balanced Parentheses
//  Description: Write a function to check if a string of brackets is balanced.
//  Example Input: "({[]})"
//  Expected Output: true
//  Concepts: Stack, Array, control flow

function isBalanced(s) {
    const stack = [];
    const pairs = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (const char of s) {
      if (['(', '{', '['].includes(char)) {
        stack.push(char);
      } else if ([')', '}', ']'].includes(char)) {
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  console.log(isBalanced("({[]})")); // true
  console.log(isBalanced("({[})"));  // false
  