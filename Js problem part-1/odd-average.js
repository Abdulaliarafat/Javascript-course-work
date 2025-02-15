// simpal one 
function evenSum1(numbers){
    const evenArray = [];
      for(const number of numbers){
        // console.log(number)
        if(number % 2 === 0){
            // console.log(number)
            evenArray.push(number)
        } 
      }
    //   console.log(evenArray)
     let sum = 0;
      for(const numberEven of evenArray ){
          sum = sum + numberEven;
      }
      const len = evenArray.length;
      const average = sum / len ;
      console.log(sum, len)
      return average;
}
const number = [11,12,14,18,15,55,56,77,44,66,88]
const avg = evenSum1(number)
console.log('sum all even number: ',avg.toFixed(2))

// odd number sum 
// first loop for saperate odd
// second loop for sum odd number in array
// array length then divided with sum / length

function oddNumSum(numbers){
    const oddArray = [];
        for(const number of numbers)
            // console.log(number)
        if(number % 2 !== 0){ 
            // console.log(number)
            oddArray.push(number)
        }
        // console.log(oddArray)
        let sum = 0;
        for(const numberOdd of oddArray){
             sum = sum + numberOdd;
        }
        const len = oddArray.length
        console.log(sum, len)
        const oddAvg = sum / len;
        return "total odd sum: ", oddAvg.toFixed(2)
}
// const number = [13,15,22,66,77,19,7,23,11,45];
// const avg = oddNumSum(number)
// console.log('sun of all odd number: ', avg)