// 4. FizzBuzz
// Description: Print numbers from 1 to n. For multiples of 3, print "Fizz", for 5 print "Buzz", and for both print "FizzBuzz".
// Example: 1, 2, Fizz, 4, Buzz...
// Concepts: Loops, conditionals, modulus

function fizzBuzz(n) {
    const arra=[]
    for(let i=0;i<=n;i++){
        if(i%3===0 && i%5===0){
            arra.push("FizzBuzz")
        }
        else if(i%3===0){
            arra.push("fizz")
        }
        else if (i%5===0){
            arra.push("buzz")
        }
       else{
        arra.push(i.toString());
       }
     }
    return arra
     
}
let n = 20;
let res = fizzBuzz(n);
console.log(res.join(' '));
 

