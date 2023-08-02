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

// Get references to the buttons
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");

// Add click event listeners to the buttons
btn5.addEventListener("click", function() {
  window.location.href = "inventory.html";
});

btn6.addEventListener("click", function() {
  window.location.href = "expenses.html";
});

btn7.addEventListener("click", function() {
  window.location.href = "employees.html";
});

btn8.addEventListener("click", function() {
  window.location.href = "customers.html";
});



// Inventory Dropdown  //
const inventorydropdownButton = document.getElementById("inventorydropdown-button");
const inventorydropdownMenu = document.getElementById("inventorydropdown-menu");

inventorydropdownButton.addEventListener("click", function() {
  inventorydropdownMenu.classList.toggle("inventorydropdown-open");
  inventorydropdownButton.classList.toggle("inventorydropdown-active");
});


// expense page dropdown

  // Function to format a date as "Month Day, Year" (e.g., "January 1, 2023")
  function formatDate(date) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  // Function to update the date range in the dropdown button
  function updateDateRange() {
    // Get the current date
    const currentDate = new Date();

    // Get the first day of the current month
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    // Get the first day of the next month
    const firstDayOfNextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    // Format the dates as strings
    const currentMonthStr = formatDate(firstDayOfMonth);
    const nextMonthStr = formatDate(firstDayOfNextMonth);

    // Update the paragraph text with the date range
    const dateRangeParagraph = document.querySelector('.inventory_dropdownbtn > div > p');
    dateRangeParagraph.textContent = `${currentMonthStr} - ${nextMonthStr}`;
  }

  // Call the function to update the date range when the page loads
  updateDateRange();
