const modalsButtons = document.querySelectorAll(".modals-button");

modalsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalsId = button.dataset.modals;
    const modals = document.getElementById(modalsId);
    modals.classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modals")) {
    event.target.classList.remove("active");
  }
});