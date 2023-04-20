let date = new Date();
let year = date.getFullYear();

// set nav click on hover for nav dropdown
const nav = document.querySelector("nav");
const dropdown = Array.from(nav.querySelectorAll(".nav-item.dropdown [data-toggle]"));

if (window.innerWidth > 1000) {
  dropdown.forEach((el) => {
    el.addEventListener("mouseover", () => {
      el.click();
    });
  });

  document.addEventListener("mouseout", (event) => {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu")) {
      document.body.click();
    }
  });
}
if (window.innerWidth < 1000) {
  dropdown.forEach((el) => {
    el.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const submenu = el.nextElementSibling;
        if (submenu.classList.contains("show")) {
          submenu.classList.remove("show");
        } else {
          const activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
          activeSubmenus.forEach((submenu) => {
            submenu.classList.remove("show");
          });
          submenu.classList.add("show");
        }
      } else {
        el.click();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu")) {
      const activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
      activeSubmenus.forEach((submenu) => {
        submenu.classList.remove("show");
      });
    }
  });
}

// nav mobile toggle btn code
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  let isShown = navbarCollapse.classList.contains("show");
  setTimeout(() => {
    if (isShown) {
      navbarCollapse.style.maxHeight = "0";
    } else {
      navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
    }
    // navbarCollapse.classList.toggle("show");
  }, 10);
});

document.addEventListener("DOMContentLoaded", function () {
  let formConfig = {
    // class of the parent element where the error/success class is added
    classTo: "form-group",
    errorClass: "has-danger",
    successClass: "has-success",
    // class of the parent element where error text element is appended
    errorTextParent: "form-group",
    // type of element to create for the error text
    errorTextTag: "div",
    // class of the error text element
    errorTextClass: "text-danger mt-2",
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
  const counterElements = document.querySelectorAll(".countings__stat");

  // counter animation
  let counterOptions = {
    rootMargin: "-50px",
    threshold: 0.5,
  };

  let counterCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let counterElement = entry.target;

        const duration = parseInt(counterElement.getAttribute("data-count-duration"));
        const countElement = counterElement.querySelector(".statCount");

        const updateCounter = () => {
          const target = +counterElement.getAttribute("data-count");
          const count = +countElement.innerText;
          const increment = target / duration;
          if (count < target) {
            countElement.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
          } else countElement.innerText = target;
        };
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  };

  let counterObserver = new IntersectionObserver(counterCallback, counterOptions);

  // Loop through each counter element and animate the count
  counterElements.forEach((counterElement) => {
    counterObserver.observe(counterElement);
  });

  // mutation observer for accordions
  // Select the node that will be observed for mutations
  const targetNode = document;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function (mutationsList, observer) {
    // Loop through the mutations
    for (const mutation of mutationsList) {
      // Check if the mutation is a change in attribute
      if (mutation.type === "attributes" && mutation.attributeName === "aria-expanded") {
        // Select the closest parent with the class "c-accordion"
        const accordion = mutation.target.closest(".c-accordion");
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
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  var accordions = document.querySelectorAll(".c-accordion__btn");
  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      accordions.forEach((cbtn) => {
        if (cbtn != btn) {
          cbtn.classList.add("collapsed");
          cbtn.setAttribute("aria-expanded", "false");
          cbtn.nextElementSibling.classList.remove("show");
        }
      });
    });
  });

  // event for scaitabs
  let scaiTabs = document.querySelector(".scaiTabs");
  if (scaiTabs && window.innerWidth >= 1020) {
    let tabButtons = Array.from(scaiTabs.querySelectorAll(".scaiTabs .d-md-flex .nav .nav-link"));
    tabButtons.map((btn) => {
      btn.addEventListener("click", () => {
        window.scrollTo({
          top: scaiTabs.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      });
    });
  }
});
