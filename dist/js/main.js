"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
document.addEventListener("DOMContentLoaded", function () {
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

  // mutation observer for accordions
  // Select the node that will be observed for mutations
  var targetNode = document;

  // Options for the observer (which mutations to observe)
  var config = {
    attributes: true,
    childList: true,
    subtree: true
  };

  // Callback function to execute when mutations are observed
  var callback = function callback(mutationsList, observer) {
    // Loop through the mutations
    var _iterator = _createForOfIteratorHelper(mutationsList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        // Check if the mutation is a change in attribute
        if (mutation.type === "attributes" && mutation.attributeName === "aria-expanded") {
          // Select the closest parent with the class "c-accordion"
          var accordion = mutation.target.closest(".c-accordion");
          if (!accordion) {
            continue;
          }
          // Add or remove the class "-active" based on the attribute value
          if (mutation.target.getAttribute("aria-expanded") === "true") {
            accordion.classList.add("-active");
          } else {
            accordion.classList.remove("-active");
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  // Create an observer instance linked to the callback function
  var observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
  var accordions = document.querySelectorAll(".c-accordion__btn");
  accordions.forEach(function (btn) {
    btn.addEventListener("click", function () {
      accordions.forEach(function (cbtn) {
        if (cbtn != btn) {
          cbtn.classList.add("collapsed");
          cbtn.setAttribute("aria-expanded", "false");
          cbtn.nextElementSibling.classList.remove("show");
        }
      });
    });
  });

  // event for scaitabs
  var scaiTabs = document.querySelector(".scaiTabs");
  if (scaiTabs && window.innerWidth >= 1020) {
    var tabButtons = Array.from(scaiTabs.querySelectorAll(".scaiTabs .d-md-flex .nav .nav-link"));
    tabButtons.map(function (btn) {
      btn.addEventListener("click", function () {
        window.scrollTo({
          top: scaiTabs.offsetTop,
          left: 0,
          behavior: "smooth"
        });
      });
    });
  }
});
//# sourceMappingURL=main.js.map