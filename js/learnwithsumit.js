const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;
    const letters = Array.from(sentence);
    
    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}

console.log(countVowels("I am learning JavaScript with Sumit!"));



// return duplicate number from the array

const numbers = [1, 2, 4, 3, 4, 5, 2, 6, 7, 5, 8, 9, 10];

const duplicateNumbers = numbers.filter((value, index, array) => {
    return array.indexOf(value) !== index;
})
console.log(duplicateNumbers)