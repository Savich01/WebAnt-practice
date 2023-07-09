const card = document.querySelectorAll('.card');

function func(){
  window.location.href = 'http://127.0.0.1:5500/Characters-details/index.html';
}

for (let elem of card) {
  elem.addEventListener('click', func);
}
// -----------------------------------------


const menu = document.querySelector('.burger-menu__nav');
const menuBtn = document.querySelector('.burger-menu__btn');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  });
}

// ----------------------------------------------

document.getElementById("open-modal-btn").addEventListener("click", function(){
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function () {
  document.getElementById("my-modal").classList.remove ("open")
})

// ------------------------------------------------

const btn = document.querySelector('.card-box__btn');
const cards = document.querySelectorAll('.card');

btn.addEventListener('click', function () {

  for (let card of cards) {
    card.style.display = "block";
  }

  btn.style.display = "none";

});s

