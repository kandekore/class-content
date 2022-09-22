const countVowels = (checkVowel) => {
let count = 0;
let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < checkVowel.length; i++ ) {
    if (vowels.includes(checkVowel[i])) {
        count++;
    }
}
console.log(count);
};
countVowels("hello");