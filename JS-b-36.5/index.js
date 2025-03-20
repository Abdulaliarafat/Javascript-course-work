// const age = 10;
// localStorage.setItem('myage',age)
// console.log(localStorage.getItem('age'))
const handleAddStorage=()=>{
   const person={
    name:'alom',
    age:10,
    friends:['rohim','korim','mofij']
   }
   const converted =JSON.stringify(person)
   localStorage.setItem('alom',converted)
}
const data=localStorage.getItem('alom')
const converteObject=JSON.parse(data)
console.log(converteObject.friends)