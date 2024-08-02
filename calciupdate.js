
let Calculator='';
document.addEventListener('DOMContentLoaded', () => {
  Calculator = get() || '';
  outputDisplay(Calculator);
});


function set(Calculator){
       
  localStorage.setItem('stored',JSON.stringify(Calculator));
}
function get(){
  Calc = JSON.parse(localStorage.getItem('stored'));
  return Calc;
}

console.log(`Last stored value was ${Calculator}`);
function outputDisplay(Calculator){
 const Display = document.querySelector('.output-js');
 
  Display.innerHTML =`${Calculator}`;

  
}

