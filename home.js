var mybutton = document.querySelector("#myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toServices() {
    var elmnt = document.getElementById("services");
    elmnt.scrollIntoView();
  }

function toContacts() {
    var elmnt = document.getElementById("contacts");
    elmnt.scrollIntoView();
  }

  function toAbout() {
    var elmnt = document.getElementById("about");
    elmnt.scrollIntoView();
  }