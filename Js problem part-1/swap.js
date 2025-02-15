
// let a = [2,5,6,7,7,8,8,8,8,9,7];
// let b = [2,2,2,2,2,2,2,2,2,2,2];
let a = 5;
let b = 7;
console.log(a,b);
const temp = a;
a = b;
b = temp;
console.log(a,b)

let x = 6;
let y = 8;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);