// Array of CSS classes with text colors
const colors = ['text-light', 'text-success', 'text-warning', 'text-danger', 'text-info', 'text-primary'];  
var button = document.querySelector('.nav-button');
var items = document.querySelector('.nav-items');
var link = document.getElementsByTagName('a');

button.addEventListener('click', function() {
  items.classList.toggle('opened');
}, false);

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(e) {
    e.preventDefault();
    items.classList.remove('opened');
  }, false);
}

const form = document.querySelector('form');
const popup = document.querySelector('#popup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  popup.style.display = 'none';
});
$(document).ready(function() {
  $('#popup').fadeIn(1000);
});