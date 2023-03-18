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

// document.querySelectorAll("lottie-player[data-src]").forEach((lp) => {
//   lp.load(lp.dataset.src);
// });

// platformsection
// function platformConnectingDots() {
//   var canvas = document.getElementById("platforms__canvas"),
//     ctx = canvas.getContext("2d");

//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   var stars = [], // Array that contains the stars
//     FPS = 60, // Frames per second
//     x = 100, // Number of stars
//     mouse = {
//       x: 0,
//       y: 0,
//     }; // mouse location

//   // Push stars to array

//   for (var i = 0; i < x; i++) {
//     stars.push({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       radius: Math.random() * 1 + 1,
//       vx: Math.floor(Math.random() * 50) - 25,
//       vy: Math.floor(Math.random() * 50) - 25,
//     });
//   }

//   // Draw the scene

//   function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.globalCompositeOperation = "lighter";

//     for (var i = 0, x = stars.length; i < x; i++) {
//       var s = stars[i];

//       // ctx.fillStyle = "#fff";
//       ctx.fillStyle = "#00000080";
//       ctx.beginPath();
//       ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//       ctx.fill();
//       // ctx.fillStyle = "black";
//       ctx.fillStyle = "#00000080";
//       // ctx.fillStyle = "white";
//       ctx.stroke();
//     }

//     ctx.beginPath();
//     for (var i = 0, x = stars.length; i < x; i++) {
//       var starI = stars[i];
//       ctx.moveTo(starI.x, starI.y);
//       if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
//       for (var j = 0, x = stars.length; j < x; j++) {
//         var starII = stars[j];
//         if (distance(starI, starII) < 150) {
//           //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//           ctx.lineTo(starII.x, starII.y);
//         }
//       }
//     }
//     ctx.lineWidth = 0.05;
//     // ctx.strokeStyle = "white";
//     ctx.strokeStyle = "#D1D1D1";
//     ctx.stroke();
//   }

//   function distance(point1, point2) {
//     var xs = 0;
//     var ys = 0;

//     xs = point2.x - point1.x;
//     xs = xs * xs;

//     ys = point2.y - point1.y;
//     ys = ys * ys;

//     return Math.sqrt(xs + ys);
//   }

//   // Update star locations

//   function update() {
//     for (var i = 0, x = stars.length; i < x; i++) {
//       var s = stars[i];

//       s.x += s.vx / FPS;
//       s.y += s.vy / FPS;

//       if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//       if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//     }
//   }

//   canvas.addEventListener("mousemove", function (e) {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
//   });

//   // Update and draw

//   function tick() {
//     draw();
//     update();
//     requestAnimationFrame(tick);
//   }

//   tick();
// }
// platformConnectingDots();

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
testimonialsWrapperHeight.style.height = testimonialsWrapperHeight.offsetHeight + "px";

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

// // counter animation
// // Get all the counter elements
// const counterElements = document.querySelectorAll(".countings__stat");

// // Define the updateCount function
// function updateCount(countElement, count) {
//   countElement.textContent = count;
// }

// // Define the animateCount function
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

// // Loop through each counter element and animate the count
// counterElements.forEach((counterElement) => {
//   const startCount = 0;
//   const targetCount = parseInt(counterElement.getAttribute("data-count"), 10);
//   const duration = 3000;
//   const interval = Math.floor(duration / targetCount);

//   const countElement = counterElement.querySelector(".statCount");

//   animateCount(countElement, startCount, targetCount, duration, interval);
// });

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
    visibility: [0.1, 1],
    type: "seek",
    frames: [0, 176]
  }]
});
LottieInteractivity.create({
  player: "#executionLottie",
  mode: "scroll",
  container: ".-executionLottieContainer",
  actions: [{
    visibility: [0.1, 0.7],
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

// particlesJS.load("platforms__canvas", "assets/particlesjs-config.json", function () { });
// Load particleJS
particlesJS.load("platforms__canvas", "assets/particlesjs-config.json", function () {});
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