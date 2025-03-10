const handleLoadUser=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        displayUsers(data)
    })
}
const displayUsers=(users)=>{
     console.log(users[0])
}