function mySecondFunction() {
  document.getElementById("myDropdown2").classList.toggle("show")
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementByClassName("dropdown-content");
    var i;
    for (i=0; i < dropdowns.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
