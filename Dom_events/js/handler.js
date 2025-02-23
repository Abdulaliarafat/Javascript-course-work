document.getElementById('btn-update-title')
.addEventListener('click',function(){
//   console.log('button click')
const pageTitle = document.getElementById('page-title');
    console.log(pageTitle);
    pageTitle.innerText = 'Update page title text';
});

document.getElementById('btn-login').addEventListener('click',function(){
    const greeting = document.getElementById('greeting');
    greeting.innerText = 'Login successful';
   })