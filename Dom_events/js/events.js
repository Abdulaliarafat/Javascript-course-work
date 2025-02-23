console.log('extarnal file');
 // it could be extarnal file work option (2) js.......
  function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
  }
  function makeRed(){
     document.body.style.backgroundColor = 'red';
  }
// get element by id set onclick..... option (3)..js
  const btnMakeBlue = document.getElementById('btn-make-blue');
  // console.log(btnMakeBlue);
  btnMakeBlue.onclick = function makeBlue(){
  document.body.style.backgroundColor = 'blue'
   }
// option (3)...different version......js
  const btnMakePurple = document.getElementById('btn-make-purple');
//   console.log(makePurple);
  btnMakePurple.onclick = makePurple;
  function makePurple(){
  document.body.style.backgroundColor = 'purple'
  }
       