// sum of array..............
// 1. set a function
// 2. call chack
// 3. set a perametar
// 4. cheak is parametar right
// 5. do the function task

function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number)
        sum = sum + number;
    }
    return sum

}
const num = [54, 56, 37, 21];
const sums = sumOfNumber(num);
console.log ('sum of number is', sums);