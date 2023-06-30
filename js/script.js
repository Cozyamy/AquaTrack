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

const farmdropdownButton = document.getElementById("farmdropdown-button");
const farmdropdownMenu = document.getElementById("farmdropdown-menu");

farmdropdownButton.addEventListener("click", function() {
  farmdropdownMenu.classList.toggle("farmdropdown-open");
  farmdropdownButton.classList.toggle("farmdropdown-active");
});

function updateProgressBar(progressClass, percentage) {
	const progressBars = document.getElementsByClassName(progressClass);
	Array.from(progressBars).forEach((progressBar) => {
	  progressBar.style.width = `${percentage}%`;
	});
  }
  
  // Update progress for each bar
  updateProgressBar("progress-1", 90);
  updateProgressBar("progress-2", 35);
  updateProgressBar("progress-3", 45);
  updateProgressBar("progress-4", 80);
  updateProgressBar("progress-5", 20);
  





