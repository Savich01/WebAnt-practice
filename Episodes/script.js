const card = document.querySelectorAll('.card');

function func(){
  window.location.href = 'http://127.0.0.1:5500/Episode%20-%20details/#';
}

for(let elem of card) {
  elem.addEventListener('click', func);
}