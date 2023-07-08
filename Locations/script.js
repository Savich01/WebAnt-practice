const card = document.querySelectorAll('.card');

for (let elem of card) {
  elem.addEventListener('click', function(){
    window.location.href = 'http://127.0.0.1:5500/Location-%20details/';
  });
}