const friends = ['akib','rakib','sakib','mofij','Abid'];
const sort_friends = friends.sort();
console.log(sort_friends)

// 1. ascending...........
// 2. decending...........
 const num = [12,43,54,67,87,98,434,]
 // 1. ascending...........
 const sort_num = [...num].sort(function(a, b) {return a-b});

 // 2. decending...........
 const sort_num = [...num].sort(function(a, b) {return b-a});
 console.log(num)