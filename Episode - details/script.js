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

// -------------------------


const menu = document.querySelector('.burger-menu__nav');
const menuBtn = document.querySelector('.burger-menu__btn');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  });
}