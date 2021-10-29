var mybutton = document.querySelector("#myButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toServices() {
  var elmnt = document.getElementById("services");
  elmnt.scrollIntoView();
}

function toAbout() {
  var elmnt = document.getElementById("about");
  elmnt.scrollIntoView();
}
