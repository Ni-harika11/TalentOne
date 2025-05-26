// 3. Count Vowels in a String
// Description: Count how many vowels (a, e, i, o, u) are present in a given string.
// Example: "developer" → 4
// Concepts: String, loop, conditionals


function countVowels() {
    const data = "developer";
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if ("aeiou".includes(data[i])) {
            count++;
        }
    }

    console.log("Number of vowels:", count);
}

countVowels();
