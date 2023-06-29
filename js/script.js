const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
}))

const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});





