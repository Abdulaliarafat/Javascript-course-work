const number = [1,2,4,5,6,7,8,9,10]
// number.reverse();
// console.log(number)
// ..........................
// const reverse = number.reverse();
// console.log(reverse)
// ................................

// const rev_number = [];

// for( const num of number){
//     console.log(num)
//     rev_number.unshift(num)
// }
// console.log(rev_number)
// ......................................
// const rev_number = [];
//  for( i = 0; i < number.length; i++){
//     const num = (number[i])
//     rev_number.unshift(num)
//  }
//  console.log(rev_number)
// ..................................reverse side.............................
const rev_number = [];
for(i = number.length-1; i >=0; i--){
    const num = number[i];
    console.log(num)
    rev_number.push(num)
}
console.log(rev_number)
