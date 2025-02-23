// const sections = document.getElementsByTagName('section');
// console.log(sections)
// for(const section of sections){
//     section.style.border = '2px solid blue';
//     section.style.marginBottom = '5px';
//     section.style.borderRadius = '5px';
// } 
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'yellow'
} 
// const placesContainer = document.getElementById('places-container')  
// placesContainer.style.backgroundColor = 'pink'
 const placesContainer = document.getElementById('places-container');
 placesContainer.classList.add('text-align');
 placesContainer.classList.remove('large-text','text-align');