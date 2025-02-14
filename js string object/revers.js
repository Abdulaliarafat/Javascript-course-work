// const sentence = 'i am leanring web dev.';
// let revers = ('');
// for(const letter of sentence){
//     // console.log(letter)
//     revers = letter + revers;
// }
// console.log(revers)

// const sentence = 'i am leanring web dev.';
// let rev = '';
// for(i = 0; i <sentence.length; i++){
//     // console.log(i)
//     // console.log(sentence[i])
//     const letter = sentence[i];
//     rev = letter + rev;
// }
// console.log(rev);
// .................short cut.....................
const sentence = 'i am leanring web dev.';
const revers = sentence.split('').reverse().join('');
console.log(revers)
