const person={
    name:'arafat',
    age: 30,
   country:'BD',
}
// console.log(person["name"])
// console.log(person.name)
// for(let key in person){
//     console.log(`Key:${key} Value:${person[key]}`)    
// }
    for(let [key,value] of Object.entries(person)){
  console.log(`Kye:${key}  Value:${value}`)
}