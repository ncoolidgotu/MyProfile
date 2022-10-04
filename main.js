//Code below is from W3 Schools
//https://www.w3schools.com/css/css_navbar.asp
function mobileNav() {
  var x = document.getElementById("mobileLinks"); //grab the div class for mobileLinks (navigation for phone/tablet)
  if (x.style.display === "block") { 
    x.style.display = "none"; //By default, this class is set to hidden display in CSS
  } else {
    x.style.display = "block"; //Unhide the class and display the menu
}
}