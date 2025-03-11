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
        `;
        postContainer.appendChild(div)
      }
}
const handleupdate=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
const handlecreate=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}