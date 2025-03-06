const rahat2 ={
    name:'arif',
    age: 35,
   country:'bd',
}
Object.freeze(rahat2)
Object.seal(rahat2)
rahat2.age=39
rahat2.name='rahat'
rahat2.status='not found';
console.log(rahat2)

// console.log(Object.keys(rahat2))
// console.log(Object.values(rahat2))
// console.log(Object.entries(rahat2))