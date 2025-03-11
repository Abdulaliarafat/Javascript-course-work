const handlepost=()=>{
   fetch("https://jsonplaceholder.typicode.com/posts")
   .then(res=>res.json())
   .then(data=>{
    displayPost(data)
   })
}
const displayPost=(posts)=>{
      const postContainer=document.getElementById('postContainer')
      for(const post of posts){
        console.log(post)
        const div=document.createElement('div')
        div.classList.add('card')
        div.innerHTML=`
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>button</button>
        `
        postContainer.appendChild(div)
      }
}
handlepost()