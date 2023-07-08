const card = document.querySelectorAll('.card');

function func(){
  window.location.href = 'http://127.0.0.1:5500/Characters-details/index.html';
}

for (let elem of card) {
  elem.addEventListener('click', func);
}