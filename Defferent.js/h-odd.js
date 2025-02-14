// for( i = 0; i <= 40; i++){
//     console.log(i)
//     if(i % 2 !== 0){
//         continue;
//     }
// }
  
const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
 continue;
 }
 console.log(array[i]);
}