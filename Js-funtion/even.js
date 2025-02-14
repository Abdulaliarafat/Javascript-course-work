// step by step...............

function evenNumberOnly (numbers){
       const even = [];
    for( const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            even.push(number)
        }
    }
    return even
}
const allNumber = [23, 45, 56, 78, 46]
// const result = evenNumberOnly(allNumber)
// console.log(result)
// ............................sum......................

function sumOfNumber(numbers){
    let sum = 0;
      for(const number of numbers){
            sum = sum + number
      }
      return sum
}
const allNumber2 = [23,45,56,67]
const result = sumOfNumber(allNumber2)
console.log('sum of array', result)