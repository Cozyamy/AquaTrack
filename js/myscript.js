var xValuesOne = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
var yValuesOne = [13, 20, 30, 50, 95, 75, 63, 75, 88, 50];
var barColorsOne = ["#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E"];
var yValueOne = [9, 13, 25, 45, 70, 52, 48, 53, 65, 35];
var barColorOne = ["#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA"];
var barPercentageOne = [0.25];

var xValuesTwo = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
var yValuesTwo = [13, 20, 30, 100, 21, 15, 63, 75, 88, 50];
var barColorsTwo = ["#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E"];
var yValueTwo = [9, 13, 25, 80, 17, 13, 48, 53, 65, 35];
var barColorTwo = ["#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA"];
var barPercentageTwo = [0.25];

var xValuesThree = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June"];
var yValuesThree = [13, 20, 30, 30, 50, 53, 63, 75, 80, 97];
var barColorsThree = ["#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E", "#0A2A5E"];
var yValueThree = [9, 13, 25, 105, 30, 13, 48, 53, 97, 74];
var barColorThree = ["#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA", "#0180EA"];
var barPercentageThree = [0.25];


new Chart("chart1", {
  type: "bar",
  data: {
    labels: xValuesOne,
    datasets: [{
      backgroundColor: barColorsOne,
      data: yValuesOne,
      barPercentageOne: 0.25
    },
    {
      backgroundColor: barColorOne,
      data: yValueOne
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

new Chart("chart2", {
  type: "bar",
  data: {
    labels: xValuesTwo,
    datasets: [{
      backgroundColor: barColorsTwo,
      data: yValuesTwo,
      barPercentageOne: 0.25
    },
    {
      backgroundColor: barColorTwo,
      data: yValueTwo
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

new Chart("chart3", {
  type: "bar",
  data: {
    labels: xValuesThree,
    datasets: [{
      backgroundColor: barColorsThree,
      data: yValuesThree,
      barPercentageThree: 0.25
    },
    {
      backgroundColor: barColorThree,
      data: yValueThree
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

btn1.addEventListener('click', () => {
  section1.classList.add('active');
  section2.classList.remove('active');
  section3.classList.remove('active');
});

btn2.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.add('active');
  section3.classList.remove('active');
});

btn3.addEventListener('click', () => {
  section1.classList.remove('active');
  section2.classList.remove('active');
  section3.classList.add('active');
});



const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      const activeButton = document.querySelector('.active');
      activeButton.classList.remove('active');
      this.classList.add('active');
    }
  });
});


	var xValues = ["Batch", "Mortality Rate", "Feed Available", "Ponds", "Total Unit"];
	var yValues = [30, 20, 40, 30, 152];
	var barColors = [
	  "#02579E",
	  "#F84D4D",
	  "#C4A6FF",
	  "#B6C8F8",
	  "#3E93F6"
	];
	
	new Chart("myChart", {
	  type: "pie",
	  data: {
		labels: xValues,
		datasets: [{
		  backgroundColor: barColors,
		  data: yValues
		}]
	  },
	  options: {
		plugins: {
			legend: {
				display: false
			}
		}
	}
	});