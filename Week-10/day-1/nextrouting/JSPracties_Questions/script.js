// . Find First Non-Repeating Character
//  Example Input: "aabbcdde"
//  Expected Output: "c
// Concepts: String, Object, for loop, frequency counting

// function find_FirstNotRepeatingChar(simple_data){
//     var stri1=simple_data.split('')
//     var ct=0;
//     var result='';
//     for (var x=0; x < stri1.length ; x++){
//         ct=0;
//     for(var y=0; y<stri1.length; y++){
//         if(stri1[x]==stri1[y]){
//             ct+=1;
//         }
//     }
//     if(ct < 2){
//         result=stri1[x]
//         break;
//     }
//     }
//     return result
// }
// console.log(find_FirstNotRepeatingChar("aabbcdde"));
function firsr(str){
    for(let i=0; i < str.length ; i++){
        let char=str[i];
        // if(str.indexOf(char)==i && str.indexOf(char,i+1)==-1)
        if(str.indexOf(char)===str.lastIndexOf(char))
            {
            return char;
        }
    }
    return "_"
}
console.log(firsr("abacabad"))