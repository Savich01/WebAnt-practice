const card = document.querySelectorAll('.card');

function func(){
  window.location.href = 'http://127.0.0.1:5500/Episode%20-%20details/#';
}

for(let elem of card) {
  elem.addEventListener('click', func);
}

// ------------------------


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

// -----------------------------------------

const btn = document.querySelector('.card-box__btn');
const cards = document.querySelectorAll('.card');

btn.addEventListener('click', function () {

  for (let card of cards) {
    card.style.display = "block";
  }

  btn.style.display = "none";

});

// ----------------------

document.querySelector('.serch-form__text').oninput = function () {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.card');
  if (val != '') {
    elasticItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add('hide');
      }
      else {
        elem.classList.remove('hide');
      }
    });
  }
  else {
    elasticItems.forEach(function (elem) {
      elem.classList.remove('hide');
    });
  }
}