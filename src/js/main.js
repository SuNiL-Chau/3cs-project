let date = new Date();
let year = date.getFullYear();

// set nav click on hover for nav dropdown
const nav = document.querySelector("nav");
const dropdown = Array.from(nav.querySelectorAll(".nav-item.dropdown [data-toggle]"));

if (window.innerWidth > 1000) {
  // Open dropdown on mouseover
  dropdown.forEach((el) => {
    el.addEventListener("mouseover", () => {
      el.click();
    });
  });

  // Close dropdowns on mouseout
  document.addEventListener("mouseout", (event) => {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu") && !event.target.closest(".navbar")) {
      document.body.click();
    }
  });
}
if (window.innerWidth < 1000) {
  // Dropdown click event listener
  dropdown.forEach((el) => {
    el.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const submenu = el.nextElementSibling;
        console.log(submenu);
        if (submenu.classList.contains("show")) {
          // Close the submenu
          setTimeout(() => {
            submenu.classList.remove("show");
            submenu.parentElement.classList.remove("show");
          }, 100);
        } else {
          // Open the submenu
          const activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
          activeSubmenus.forEach((subsubmenu) => {
            subsubmenu.classList.remove("show");
          });
          submenu.classList.toggle("show");

          // Add activeDropdown class to the parent element
          const parentElement = el.parentElement;
          const otherDropdownParents = Array.from(dropdown).map((dropdownEl) => dropdownEl.parentElement);
          otherDropdownParents.forEach((dropdownParent) => {
            dropdownParent.classList.remove("activeDropdown");
          });
          parentElement.classList.add("activeDropdown");

          // Close other dropdowns
          const otherDropdowns = Array.from(dropdown).filter((dropdownEl) => dropdownEl !== el);
          otherDropdowns.forEach((dropdownEl) => {
            const otherSubmenu = dropdownEl.nextElementSibling;
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

  document.addEventListener("click", (event) => {
    if (!dropdown.includes(event.target) && !event.target.classList.contains("dropdown-menu") && !event.target.classList.contains("dropdown-item") && !event.target.closest(".dropdown-submenu")) {
      // Close all active submenus
      const activeSubmenus = nav.querySelectorAll(".dropdown-submenu.show");
      activeSubmenus.forEach((submenu) => {
        submenu.classList.remove("show");
      });

      // Remove activeDropdown class from all parent elements
      const dropdownParents = Array.from(dropdown).map((dropdownEl) => dropdownEl.parentElement);
      dropdownParents.forEach((dropdownParent) => {
        dropdownParent.classList.remove("activeDropdown");
      });
    }
  });

  // Fix for submenus not working
  const submenus = document.querySelectorAll(".dropdown-item.dropdown-toggle");
  submenus.forEach((submenu) => {
    submenu.addEventListener("click", (event) => {
      event.stopPropagation();
      const element = submenu.nextElementSibling;
      const isSubMenuShown = element.classList.contains("show");
      if (isSubMenuShown) {
        element.classList.remove("show");
      } else {
        element.classList.add("show");
      }

      // Close other sibling dropdown menus
      const parentDropdown = submenu.closest("ul.dropdown-menu");
      const siblingMenus = parentDropdown.querySelectorAll(".dropdown-submenu .dropdown-menu.show");
      siblingMenus.forEach((siblingMenu) => {
        if (siblingMenu !== element) {
          siblingMenu.classList.remove("show");
        }
      });
    });
  });
}

// nav mobile toggle btn code
// const navbarToggler = document.querySelector(".navbar-toggler");
// const navbarCollapse = document.querySelector(".navbar-collapse");
// let firstPath = navbarToggler.querySelector("svg path:first-child");
// let lastPath = navbarToggler.querySelector("svg path:last-child");
// let firstPathVal = firstPath.getAttribute("d");
// let lastPathVal = lastPath.getAttribute("d");

// navbarToggler.addEventListener("click", () => {
//   let isShown = navbarCollapse.classList.contains("show");
//   setTimeout(() => {
//     if (isShown) {
//       firstPath.setAttribute("d", firstPathVal);
//       lastPath.setAttribute("d", lastPathVal);
//       navbarCollapse.style.maxHeight = "0";
//     } else {
//       navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
//       firstPath.setAttribute("d", "M9 48c-.8 1.4-.8 2.6 0 4 1 1.9 2.1 2 41 2s40-.1 41-2c.8-1.4.8-2.6 0-4-1-1.9-2.1-2-41-2s-40 .1-41 2z");
//       lastPath.setAttribute("d", "M9 48c-.8 1.4-.8 2.6 0 4 1 1.9 2.1 2 41 2s40-.1 41-2c.8-1.4.8-2.6 0-4-1-1.9-2.1-2-41-2s-40 .1-41 2z");
//     }
//     // navbarCollapse.classList.toggle("show");
//   }, 10);
// });

document.addEventListener("DOMContentLoaded", function () {
  // let formConfig = {
  //   // class of the parent element where the error/success class is added
  //   classTo: "form-group",
  //   errorClass: "has-danger",
  //   successClass: "has-success",
  //   // class of the parent element where error text element is appended
  //   errorTextParent: "form-group",
  //   // type of element to create for the error text
  //   errorTextTag: "div",
  //   // class of the error text element
  //   errorTextClass: "text-danger mt-2",
  // };

  // var form = document.getElementById("contact-form");

  // // create the pristine instance
  // var pristine = new Pristine(form, formConfig, true);

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   // check if the form is valid
  //   var valid = pristine.validate(); // returns true or false
  //   if (valid) {
  //     form.classList.add("-success");
  //     setTimeout(() => {
  //       form.reset();
  //       form.classList.remove("-success");
  //     }, 5000);
  //     // var xhr = new XMLHttpRequest();
  //     // xhr.open("GET", "https://api.example.com/data", true);
  //     // xhr.setRequestHeader("Authorization", "Bearer <your_security_token>");

  //     // xhr.onload = function () {
  //     //   if (xhr.status === 200) {
  //     //     var responseData = JSON.parse(xhr.responseText);
  //     // form.classList.add("-success");
  //     // setTimeout(() => {
  //     //   form.reset();
  //     //   form.classList.remove("-success");
  //     // }, 5000);
  //     //     console.log(responseData);
  //     //   } else {
  //     //     console.log("Request failed. Status: " + xhr.status);
  //     //   }
  //     // };

  //     // xhr.onerror = function () {
  //     //   console.log("Request failed due to a network error.");
  //     // };
  //     // xhr.send();
  //   }
  // });

  // let formConfig2 = {
  //   // class of the parent element where the error/success class is added
  //   classTo: "form-group",
  //   errorClass: "has-danger",
  //   successClass: "has-success",
  //   // class of the parent element where error text element is appended
  //   errorTextParent: "form-group",
  //   // type of element to create for the error text
  //   errorTextTag: "div",
  //   // class of the error text element
  //   errorTextClass: "text-danger mt-2",
  // };

  // var formReq = document.getElementById("requestModalForm");

  // if (formReq) {
  //   // create the pristine instance
  //   var pristineReq = new Pristine(formReq, formConfig2, true);

  //   formReq.addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     // check if the form is valid
  //     var valid = pristineReq.validate(); // returns true or false
  //     if (valid) {
  //       formReq.classList.add("-success");
  //       setTimeout(() => {
  //         formReq.reset();
  //         formReq.classList.remove("-success");
  //       }, 5000);
  //       // var xhr = new XMLHttpRequest();
  //       // xhr.open("GET", "https://api.example.com/data", true);
  //       // xhr.setRequestHeader("Authorization", "Bearer <your_security_token>");

  //       // xhr.onload = function () {
  //       //   if (xhr.status === 200) {
  //       //     var responseData = JSON.parse(xhr.responseText);
  //       // formReq.classList.add("-success");
  //       // setTimeout(() => {
  //       //   formReq.reset();
  //       //   formReq.classList.remove("-success");
  //       // }, 5000);
  //       //     console.log(responseData);
  //       //   } else {
  //       //     console.log("Request failed. Status: " + xhr.status);
  //       //   }
  //       // };

  //       // xhr.onerror = function () {
  //       //   console.log("Request failed due to a network error.");
  //       // };
  //       // xhr.send();
  //     }
  //   });
  // }

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

// var videoBtns = document.querySelectorAll("button[data-video]");
// videoBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     var videoEle = document.querySelector(`${btn.dataset.target} video`);
//     videoEle.setAttribute("src", btn.dataset.video);
//   });
// });

// readmore js and html structure to follow
/**
* <p class="readmore-para">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum iaculis dolor, ac rutrum tellus luctus sit amet. Nullam convallis metus nec pulvinar hendrerit. Vivamus gravida enim a magna ultricies rutrum. Nulla facilisi. Curabitur eu odio eget tellus accumsan pellentesque. Nam sed consequat sapien. Mauris sed mi ac nunc varius ullamcorper. Duis sit amet dui in mi tristique aliquet.
  </p>
  <a href="javascript:;" class="read-more">Read more</a>
 */
const paragraph = document.querySelector(".readmore-para");
const readMoreBtn = document.querySelector(".read-more");

if (paragraph && readMoreBtn) {
  const maxChars = 300;
  if (paragraph.textContent.length > maxChars) {
    const fullText = paragraph.textContent;
    let truncatedText = fullText.slice(0, maxChars);

    paragraph.textContent = truncatedText;

    readMoreBtn.addEventListener("click", () => {
      if (paragraph.textContent === truncatedText) {
        paragraph.textContent = fullText;
        readMoreBtn.textContent = "Read less";
      } else {
        paragraph.textContent = truncatedText;
        readMoreBtn.textContent = "...Read more";
      }
    });
  } else {
    readMoreBtn.style.display = "none";
  }
}
