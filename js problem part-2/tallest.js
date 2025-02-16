const height = [65,66,68,72,78,60,66];
 
function getMax(numbers){
    let max = numbers[0];
     for(const number of numbers){
        if(number > max){
            max = number
        }
     }
     return max;
}
const max = getMax(height)
console.log('max valu is',max)
// min number 
function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}
const lowest = [36,35,37,55,32,88,19,70] 
const minimun = getMin(lowest)
console.log('lowest numbers in array',minimun)