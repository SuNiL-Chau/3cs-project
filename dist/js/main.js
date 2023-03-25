"use strict";

// window.onresize = function () { location.reload(); }
// window.onload = function () {
//   console.clear();
// };

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
if (window.innerWidth <= 768) {
  document.querySelectorAll("button[data-aos='fade-left']").forEach(function (btn) {
    btn.setAttribute("data-aos", "fade-in");
  });
}

// lazyload lotties
// document.querySelectorAll("lottie-player[data-src]").forEach((lp) => {
//   lp.load(lp.dataset.src);
// });

// testimonials swiper
var swiper = new Swiper(".testimonials__swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 60,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});
var testimonialsWrapperHeight = document.querySelector(".testimonials__swiper .swiper-wrapper");
testimonialsWrapperHeight ? testimonialsWrapperHeight.style.height = testimonialsWrapperHeight.offsetHeight + "px" : null;

// industries swiper
var swiper2 = new Swiper(".industries__swiper", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: "auto",
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});

// news swiper
var swiper3 = new Swiper(".news__swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: "auto",
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
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

  // Define the updateCount function
  function updateCount(countElement, count) {
    countElement.textContent = count;
  }

  // Define the animateCount function
  // function animateCount(countElement, startCount, targetCount, duration, interval) {
  //   let count = startCount;
  //   const increment = Math.ceil((targetCount - startCount) / (duration / interval));

  //   const timer = setInterval(() => {
  //     count += increment;
  //     updateCount(countElement, count);
  //     if (count >= targetCount) {
  //       clearInterval(timer);
  //       count = targetCount;
  //       updateCount(countElement, count);
  //     }
  //   }, interval);
  // }

  // counter animation
  var counterOptions = {
    rootMargin: "-50px",
    threshold: 1
  };
  var counterCallback = function counterCallback(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var counterElement = entry.target;
        // const startCount = 0;
        // const targetCount = parseInt(counterElement.getAttribute("data-count"), 10);
        var duration = parseInt(counterElement.getAttribute("data-count-duration"));
        // const interval = Math.floor(duration / targetCount);
        var countElement = counterElement.querySelector(".statCount");
        // //console.log("counter element: ", counterElement);
        // //console.log("count element: ", countElement);
        // animateCount(countElement, startCount, targetCount, duration, interval);

        // counterElement.innerText = "0";
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
    // const startCount = 0;
    // const targetCount = parseInt(counterElement.getAttribute("data-count"), 10);
    // const duration = 3000;
    // const interval = Math.floor(duration / targetCount);

    // const countElement = counterElement.querySelector(".statCount");

    // animateCount(countElement, startCount, targetCount, duration, interval);
  });
};

// lottie interactivity
LottieInteractivity.create({
  player: "#servicesLottie",
  mode: "scroll",
  container: ".services",
  actions: [{
    visibility: [0.15, 0.75],
    type: "seek",
    frames: [0, 480]
  }]
});
LottieInteractivity.create({
  player: "#planningLottie",
  mode: "scroll",
  container: ".-planningLottieContainer",
  actions: [{
    visibility: [0.2, 1],
    type: "seek",
    // frames: [0, 176],
    frames: [0, 155]
  }]
});
LottieInteractivity.create({
  player: "#executionLottie",
  mode: "scroll",
  container: ".-executionLottieContainer",
  actions: [{
    visibility: [0.2, 0.7],
    type: "seek",
    frames: [0, 228]
  }]
});

// Get Lottie player instance
var scaiplayer = document.querySelector("#scaiLottie").getLottie();

// Attach Lottie event listener to player
scaiplayer.addEventListener("enterFrame", function (event) {
  // Calculate percentage of animation that has played
  var totalFrames = scaiplayer.getDuration(true);
  var currentFrame = scaiplayer.currentFrame;
  var percentage = currentFrame / totalFrames * 100;

  // Call function if animation is at or past 50%
  // console.log("percentage: ", percentage);
  var btns = document.querySelectorAll("#scai .platform__contentBtn");
  if (percentage >= 25) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[0].classList.add("-active");
  }
  if (percentage >= 45) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[1].classList.add("-active");
  }
  if (percentage >= 55) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[2].classList.add("-active");
  }
  if (percentage >= 65) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[3].classList.add("-active");
  }
});

// Add Lottie Interactivity to player
LottieInteractivity.create({
  player: scaiplayer,
  mode: "scroll",
  container: "#scai",
  actions: [{
    visibility: [0, 0.8],
    type: "seek",
    frames: [0, 228]
  }]
});

// Get Lottie player instance
var itmsplayer = document.querySelector("#itmsLottie").getLottie();

// Attach Lottie event listener to player
itmsplayer.addEventListener("enterFrame", function (event) {
  // Calculate percentage of animation that has played
  var totalFrames = itmsplayer.getDuration(true);
  var currentFrame = itmsplayer.currentFrame;
  var percentage = currentFrame / totalFrames * 100;

  // Call function if animation is at or past 50%
  // console.log("percentage: ", percentage);
  var btns = document.querySelectorAll("#itms .platform__contentBtn");
  if (percentage >= 20) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[0].classList.add("-active");
  }
  if (percentage >= 30) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[1].classList.add("-active");
  }
  if (percentage >= 40) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[2].classList.add("-active");
  }
  if (percentage >= 50) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[3].classList.add("-active");
  }
  if (percentage >= 60) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[4].classList.add("-active");
  }
  if (percentage >= 70) {
    btns.forEach(function (btn) {
      return btn.classList.remove("-active");
    });
    btns[5].classList.add("-active");
  }
});
LottieInteractivity.create({
  player: itmsplayer,
  mode: "scroll",
  container: "#itms",
  actions: [{
    visibility: [0.1, 0.8],
    type: "seek",
    frames: [0, 254]
  }]
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("platforms__canvas", "assets/particlesjs-config.json", function () {});
particlesJS.load("services__canvas", "assets/particlesjs-config.json", function () {});
particlesJS.load("countings__canvas", "assets/particlesjs-config.json", function () {});
particlesJS.load("news__canvas", "assets/particlesjs-config.json", function () {});

// document.addEventListener("DOMContentLoaded", function () {
//   // Get reference to particleJS object
//   var particleJS = particlesJS("platforms__canvas").pJS;

//   // Set initial scroll state
//   var isScrolling = false;

//   // Add event listener for scroll event
//   window.addEventListener("scroll", function () {
//     // Check if user is currently scrolling
//     if (window.scrollY > 0) {
//       isScrolling = true;
//     } else {
//       isScrolling = false;
//     }

//     // Pause or resume particleJS animation based on scroll state
//     if (isScrolling) {
//       particleJS.fn.particlesRefresh();
//       particleJS.fn.play();
//     } else {
//       particleJS.fn.pause();
//     }
//   });
// });
//# sourceMappingURL=main.js.map