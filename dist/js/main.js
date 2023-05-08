"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var date = new Date();
var year = date.getFullYear();

// set nav click on hover for nav dropdown
var nav = document.querySelector("nav");
var dropdown = Array.from(nav.querySelectorAll(".nav-item.dropdown [data-toggle]"));
if (window.innerWidth > 1000) {
  // Open dropdown on mouseover
  dropdown.forEach(function (el) {
    el.addEventListener("mouseover", function () {
      el.click();
    });
  });

  // Close dropdowns on mouseout
  document.addEventListener("mouseout", function (event) {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu")) {
      document.body.click();
    }
  });
}
if (window.innerWidth < 1000) {
  // Dropdown click event listener
  dropdown.forEach(function (el) {
    el.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        var submenu = el.nextElementSibling;
        console.log(submenu);
        if (submenu.classList.contains("show")) {
          // Close the submenu
          setTimeout(function () {
            submenu.classList.remove("show");
            submenu.parentElement.classList.remove("show");
          }, 100);
        } else {
          // Open the submenu
          var activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
          activeSubmenus.forEach(function (subsubmenu) {
            subsubmenu.classList.remove("show");
          });
          submenu.classList.toggle("show");

          // Add activeDropdown class to the parent element
          var parentElement = el.parentElement;
          var otherDropdownParents = Array.from(dropdown).map(function (dropdownEl) {
            return dropdownEl.parentElement;
          });
          otherDropdownParents.forEach(function (dropdownParent) {
            dropdownParent.classList.remove("activeDropdown");
          });
          parentElement.classList.add("activeDropdown");

          // Close other dropdowns
          var otherDropdowns = Array.from(dropdown).filter(function (dropdownEl) {
            return dropdownEl !== el;
          });
          otherDropdowns.forEach(function (dropdownEl) {
            var otherSubmenu = dropdownEl.nextElementSibling;
            if (otherSubmenu.classList.contains("show")) {
              otherSubmenu.classList.remove("show");
              otherSubmenu.parentElement.classList.remove("show");
            }
          });
        }
      } else {
        el.click();
      }
    });
  });
  document.addEventListener("click", function (event) {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu")) {
      // Close all active submenus
      var activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
      activeSubmenus.forEach(function (submenu) {
        submenu.classList.remove("show");
      });

      // Remove activeDropdown class from all parent elements
      var dropdownParents = Array.from(dropdown).map(function (dropdownEl) {
        return dropdownEl.parentElement;
      });
      dropdownParents.forEach(function (dropdownParent) {
        dropdownParent.classList.remove("activeDropdown");
      });
    }
  });

  // Fix for submenus not working
  var submenus = document.querySelectorAll(".dropdown-item.dropdown-toggle");
  submenus.forEach(function (submenu) {
    submenu.addEventListener("click", function (event) {
      event.stopPropagation();
      var element = submenu.nextElementSibling;
      var isSubMenuShown = element.classList.contains("show");
      if (isSubMenuShown) {
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }

      // Close other sibling dropdown menus
      var parentDropdown = submenu.closest("ul.dropdown-menu");
      var siblingMenus = parentDropdown.querySelectorAll(".dropdown-submenu .dropdown-menu.show");
      siblingMenus.forEach(function (siblingMenu) {
        if (siblingMenu !== element) {
          siblingMenu.classList.remove("show");
        }
      });
    });
  });
}

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
    if (valid) {
      form.classList.add("-success");
      setTimeout(function () {
        form.reset();
        form.classList.remove("-success");
      }, 5000);
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", "https://api.example.com/data", true);
      // xhr.setRequestHeader("Authorization", "Bearer <your_security_token>");

      // xhr.onload = function () {
      //   if (xhr.status === 200) {
      //     var responseData = JSON.parse(xhr.responseText);
      // form.classList.add("-success");
      // setTimeout(() => {
      //   form.reset();
      //   form.classList.remove("-success");
      // }, 5000);
      //     console.log(responseData);
      //   } else {
      //     console.log("Request failed. Status: " + xhr.status);
      //   }
      // };

      // xhr.onerror = function () {
      //   console.log("Request failed due to a network error.");
      // };
      // xhr.send();
    }
  });

  var formConfig2 = {
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
  var formReq = document.getElementById("requestModalForm");

  // create the pristine instance
  var pristineReq = new Pristine(formReq, formConfig2, true);
  formReq.addEventListener("submit", function (e) {
    e.preventDefault();

    // check if the form is valid
    var valid = pristineReq.validate(); // returns true or false
    if (valid) {
      formReq.classList.add("-success");
      setTimeout(function () {
        formReq.reset();
        formReq.classList.remove("-success");
      }, 5000);
      // var xhr = new XMLHttpRequest();
      // xhr.open("GET", "https://api.example.com/data", true);
      // xhr.setRequestHeader("Authorization", "Bearer <your_security_token>");

      // xhr.onload = function () {
      //   if (xhr.status === 200) {
      //     var responseData = JSON.parse(xhr.responseText);
      // formReq.classList.add("-success");
      // setTimeout(() => {
      //   formReq.reset();
      //   formReq.classList.remove("-success");
      // }, 5000);
      //     console.log(responseData);
      //   } else {
      //     console.log("Request failed. Status: " + xhr.status);
      //   }
      // };

      // xhr.onerror = function () {
      //   console.log("Request failed due to a network error.");
      // };
      // xhr.send();
    }
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
var videoBtns = document.querySelectorAll("button[data-video]");
videoBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var videoEle = document.querySelector("".concat(btn.dataset.target, " video"));
    videoEle.setAttribute("src", btn.dataset.video);
  });
});

// readmore js and html structure to follow
/**
* <p class="readmore-para">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum iaculis dolor, ac rutrum tellus luctus sit amet. Nullam convallis metus nec pulvinar hendrerit. Vivamus gravida enim a magna ultricies rutrum. Nulla facilisi. Curabitur eu odio eget tellus accumsan pellentesque. Nam sed consequat sapien. Mauris sed mi ac nunc varius ullamcorper. Duis sit amet dui in mi tristique aliquet.
  </p>
  <a href="javascript:;" class="read-more">Read more</a>
 */
var paragraph = document.querySelector(".readmore-para");
var readMoreBtn = document.querySelector(".read-more");
var maxChars = 300;
var fullText = paragraph.textContent;
var truncatedText = fullText.slice(0, maxChars);
paragraph.textContent = truncatedText;
readMoreBtn.addEventListener("click", function () {
  if (paragraph.textContent === truncatedText) {
    paragraph.textContent = fullText;
    readMoreBtn.textContent = "Read less";
  } else {
    paragraph.textContent = truncatedText;
    readMoreBtn.textContent = "Read more";
  }
});
//# sourceMappingURL=main.js.map