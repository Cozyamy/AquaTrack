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

const farmdropdownButton = document.getElementById("farmdropdown-button");
const farmdropdownMenu = document.getElementById("farmdropdown-menu");

farmdropdownButton.addEventListener("click", function() {
  farmdropdownMenu.classList.toggle("farmdropdown-open");
  farmdropdownButton.classList.toggle("farmdropdown-active");
});





