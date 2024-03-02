
// Mobile Navigation Menu
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("navbar-toggle").addEventListener("click", function() {
      var navUl = document.querySelector("nav ul");
      navUl.style.display = (navUl.style.display === "block") ? "none" : "block";
  });
  document.getElementById("navbar-toggle").addEventListener("click", function() {
      this.classList.toggle("active");
  });
});

// Resizing the Blog section cards

window.onload = function() {
  setEqualHeight();
};

window.onresize = function() {
  setEqualHeight();
};

function setEqualHeight() {
  var hcards = document.querySelectorAll('.card h4');
  var pcards = document.querySelectorAll('.card');
  var maxHeight1 = 0;
  var maxHeight2 = 0;
  for (var i = 0; i < hcards.length; i++) {
      hcards[i].style.height = 'auto';
      pcards[i].style.height = 'auto';
      var height1 = hcards[i].offsetHeight;
      if (height1 > maxHeight1) {
          maxHeight1 = height1;
      }
      var height2 = pcards[i].offsetHeight;
      if (height2 > maxHeight2) {
          maxHeight2 = height2;
      }
  }
  for (var i = 0; i < hcards.length; i++) {
      hcards[i].style.height = maxHeight1 + 'px';
      pcards[i].style.height = maxHeight2 + 'px';
  }
}