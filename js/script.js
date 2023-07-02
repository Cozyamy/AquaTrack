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


  const customModalButtons = document.querySelectorAll(".custom-modal-button");

customModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("custom-modal")) {
    event.target.classList.remove("active");
  }
});

const closeButtons = document.querySelectorAll(".close-buttons");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".custom-modal");
    modal.classList.remove("active");
  });
});

const minusButton = document.getElementById("minus-button");
const plusButton = document.getElementById("plus-button");
const numberSpan = document.getElementById("number");

let number = 1;

minusButton.addEventListener("click", () => {
  if (number > 1) {
    number--;
    numberSpan.textContent = number;
  }
});

plusButton.addEventListener("click", () => {
  number++;
  numberSpan.textContent = number;
});



  





