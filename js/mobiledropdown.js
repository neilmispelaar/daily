// Close the dropdown menu if the user clicks outside of it, currently working
window.onclick = function(event) {
  if (!event.target.matches('.drop-nav' || '.navigation-links')) {
    var dropdowns = document.getElementsByClassName("navigation-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
          console.log('done');
      } else {
          
      }
    }
  } 
}


/* Drop the menu */
function navDropdown() {
  var dropdowns = document.getElementsByClassName("navigation-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      } else {
          openDropdown.classList.add('show');
          console.log('added');
      }
    }
    console.log(dropdowns.className);
}

