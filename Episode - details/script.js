const button = document.querySelector('.btn');

button.addEventListener('click', function(){
  window.location.href = 'http://127.0.0.1:5500/Episodes/index.html';
});

const card = document.querySelectorAll('.card');

function func(){
  window.location.href = 'http://127.0.0.1:5500/Characters-details/';
}

for (let elem of card) {
  elem.addEventListener('click', func);
}