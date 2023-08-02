const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownButton.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});


// for pay and paid toggle
const paymentButtons = document.querySelectorAll(".pay");

paymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    togglePaymentState(button);
  });

  // Set the initial text color based on the button text content
  setButtonTextColor(button);
});

function togglePaymentState(button) {
  const buttonText = button.textContent.trim();

  // Toggle the button text and set the text color
  if (buttonText === "Pay") {
    button.textContent = "Paid";
  } else if (buttonText === "Paid") {
    button.textContent = "Pay";
  }

  setButtonTextColor(button);
}

function setButtonTextColor(button) {
  const buttonText = button.textContent.trim();

  // Add "paid" class to the button if it's "Paid", remove otherwise
  if (buttonText === "Paid") {
    button.classList.add("paid");
  } else {
    button.classList.remove("paid");
  }
}



// for different tables harvest page
const harvestOne = document.querySelector(".HarvestOne");
    const harvestTwo = document.querySelector(".HarvestTwo");
    const previousBtnOne = harvestOne.querySelector(".HarvestPrevious");
    const nextBtnOne = harvestOne.querySelector(".HarvestNext");
    const previousBtnTwo = harvestTwo.querySelector(".HarvestPrevious");
    const nextBtnTwo = harvestTwo.querySelector(".HarvestNext");

    previousBtnOne.addEventListener("click", () => {
      harvestTwo.classList.remove("hidden"); // Show HarvestTwo
      harvestOne.classList.add("hidden"); // Hide HarvestOne
    });

    nextBtnTwo.addEventListener("click", () => {
      harvestOne.classList.remove("hidden"); // Show HarvestOne
      harvestTwo.classList.add("hidden"); // Hide HarvestTwo
    });





