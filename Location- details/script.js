const button = document.querySelector('.btn');
button.addEventListener('click', function(){
  window.location.href = 'http://127.0.0.1:5500/Locations/index.html';
});

const card = document.querySelectorAll('.card');

for (let elem of card) {
  elem.addEventListener('click', function(){
    window.location.href = 'http://127.0.0.1:5500/Characters-details/index.html';
  });
}
