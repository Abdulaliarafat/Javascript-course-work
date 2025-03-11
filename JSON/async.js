const handleUser= async ()=>{
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const data= await response.json();
        console.log(data)

    }
    catch{
       console.log('Wait please... have a ERROR')
    }
}
handleUser()