/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("myDropbtn").classList.toggle("rotate");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropclick = document.getElementsByClassName("dropbtn");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      var rotateDropbtn = dropclick[i];
      // $(this).css("transform","rotate(90deg)");
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        rotateDropbtn.classList.remove('rotate');
      }
    }
  }
}

$( ".dropbtn" ).onclick(function(event) {
  if (  $( this ).css( "transform" ) == 'none' ){
      $(this).css("transform","rotate(90deg)");
  } else {
      $(this).css("transform","" );
  }
});