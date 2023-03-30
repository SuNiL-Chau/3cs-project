"use strict";

var date = new Date();
var year = date.getFullYear();

// set nav click on hover for nav dropdown
var nav = document.querySelector("nav");
var dropdown = Array.from(nav.querySelectorAll(".nav-item.dropdown [data-toggle]"));
dropdown.forEach(function (el) {
  el.addEventListener("mouseover", function () {
    el.click();
  });
});
document.addEventListener("mouseout", function (event) {
  if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item")) {
    document.body.click();
  }
});

// nav mobile toggle btn code
var navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");
navbarToggler.addEventListener("click", function () {
  var isShown = navbarCollapse.classList.contains("show");
  setTimeout(function () {
    if (isShown) {
      navbarCollapse.style.maxHeight = "0";
    } else {
      navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
    }
    // navbarCollapse.classList.toggle("show");
  }, 10);
});
window.onload = function () {
  var formConfig = {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "has-danger",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-danger mt-2"
  };
  var form = document.getElementById("contact-form");

  // create the pristine instance
  var pristine = new Pristine(form, formConfig, true);
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // check if the form is valid
    var valid = pristine.validate(); // returns true or false
  });

  // counter animation
  // Get all the counter elements
  var counterElements = document.querySelectorAll(".countings__stat");

  // counter animation
  var counterOptions = {
    rootMargin: "-50px",
    threshold: 0.5
  };
  var counterCallback = function counterCallback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var counterElement = entry.target;
        var duration = parseInt(counterElement.getAttribute("data-count-duration"));
        var countElement = counterElement.querySelector(".statCount");
        var updateCounter = function updateCounter() {
          var target = +counterElement.getAttribute("data-count");
          var count = +countElement.innerText;
          var increment = target / duration;
          if (count < target) {
            countElement.innerText = "".concat(Math.ceil(count + increment));
            setTimeout(updateCounter, 1);
          } else countElement.innerText = target;
        };
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  };
  var counterObserver = new IntersectionObserver(counterCallback, counterOptions);

  // Loop through each counter element and animate the count
  counterElements.forEach(function (counterElement) {
    counterObserver.observe(counterElement);
  });
};
//# sourceMappingURL=main.js.map