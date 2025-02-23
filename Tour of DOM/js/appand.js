// where to add..
const placesList = document.getElementById('places-list');
// what is to add..
const li = document.createElement('li');
li.innerText = 'no stay at hoome';
// add in...
placesList.appendChild(li);

// where to add 
const mainContain = document.getElementById('main-contain');
// what to add..
const section = document.createElement('section');
mainContain.appendChild(section);
const h1 = document.createElement('h1');
h1.innerText ='My favourit food list';
section.appendChild(h1);
const ul = document.createElement('ul');
section.appendChild(ul);
// 1..
const li1 = document.createElement('li');
li1.innerText = 'Beriyani';
ul.appendChild(li1);
// 2..
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);
// 3..
const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);
// 4......
const li4 = document.createElement('li');
li4.innerText = 'Tok doy';
ul.appendChild(li4);

const sectionWork = document.getElementById('main-contain');
section.style.border = '2px solid blue';
section.style.borderRadius = '10px';
section.style.paddingLeft = '10px';
section.style.backgroundColor = 'yellow'
// set inner html detectly.....
const dressScetion = document.createElement('section');
dressScetion.innerHTML = `
<h1>My favourit food list</h1>
<ul>
<li>Beriyani</li>
<li>Borhani</li>
<li>Salad</li>
<li>Tok doy</li>
</ul>
`
mainContain.appendChild(dressScetion)
