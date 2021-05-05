const btn = document.querySelector('#alternarLinks');
const angleIcon = btn.querySelector('.angle-icon');
const links = document.querySelector('#links');

btn.addEventListener('click', function(e) {
  if (!links.classList.contains('active')) {
    links.classList.add('active');

    angleIcon.classList.remove('fa-angle-down');
    angleIcon.classList.add('fa-angle-up');
  } 
  else {

    links.classList.remove('active');
    links.classList.add('rotate');

    setTimeout(function() {
      links.classList.remove('rotate');

      angleIcon.classList.add('fa-angle-down');
      angleIcon.classList.remove('fa-angle-up');
    }, 400)
  }
})