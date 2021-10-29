var mybutton = document.querySelector("#myButton");
var navBar = document.querySelector(".navigation");
var navBrand = document.querySelector(".navbar-brand");
var navLinks = document.querySelectorAll(".nav-link")
var i;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    navBar.style.backgroundColor = "rgba(31, 50, 150, 1)";
    navBrand.style.color = "white";
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "white";
    }
  } else {
    mybutton.style.display = "none";
    navBar.style.backgroundColor = "#e1f3ff";
    navBrand.style.color = "black";
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "gray";
    }
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toServices() {
  var element = document.getElementById("services");
  element.scrollIntoView();
}

function toAbout() {
  var element = document.getElementById("about");
  element.scrollIntoView();
}
