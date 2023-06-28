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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




