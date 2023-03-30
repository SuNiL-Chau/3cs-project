let date = new Date();
let year = date.getFullYear();

// set nav click on hover for nav dropdown
const nav = document.querySelector("nav");
const dropdown = Array.from(nav.querySelectorAll(".nav-item.dropdown [data-toggle]"));

dropdown.forEach((el) => {
  el.addEventListener("mouseover", () => {
    el.click();
  });
});

document.addEventListener("mouseout", (event) => {
  if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item")) {
    document.body.click();
  }
});

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

window.onload = function () {
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
};
