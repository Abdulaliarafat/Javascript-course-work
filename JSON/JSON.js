const person = {
    name:"atafat",
    age: 27,
    friends:["Rayhan","Rocky","jihan","jihad"],
    isMarrid:true
}
// this mathod we modify js object to json string....
const newPerson=JSON.stringify(person);
console.log(newPerson);
const newPerson2=JSON.parse(newPerson)
console.log(newPerson2)