// window.onresize = function () { location.reload(); }
// window.onload = function () {
//   console.clear();
// };

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

// home cube lottie
var brainAnim = lottie.loadAnimation({
  container: document.querySelector("#homebannerCube"),
  renderer: "svg",
  path: "assets/lottie/cube.json",
  autoplay: true,
  loop: true,
});
// three js cube home banner
// function homeCube() {
//   const canvas = document.getElementById("homebannerCube"); // <canvas> element from DOM
//   const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
//   if (window.innerWidth <= 768) {
//     renderer.setSize(window.innerWidth, window.innerHeight); // set size of renderer to window width and height
//   } else {
//     renderer.setSize(window.innerWidth / 2, window.innerHeight / 1.25); // set size of renderer to window width and height
//   }

//   // Handle Perspective Camera to view frustum (camera is default looking down the -X axis with +Y)
//   const fov = 30;
//   var aspectRatio;
//   if (window.innerWidth <= 768) {
//     aspectRatio = window.innerWidth / window.innerHeight;
//   } else {
//     aspectRatio = window.innerWidth / 2 / (window.innerHeight / 1.25);
//   }
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
//   camera.position.z = 4;

//   // Create new Scene
//   const scene = new THREE.Scene();

//   {
//     const color = "#FFF";
//     const intensity = 0.8;
//     const light = new THREE.DirectionalLight(color, intensity);
//     light.position.set(-1, 2, 4);
//     scene.add(light);
//   }

//   // Handle Box Geometry
//   const boxWidth = 1;
//   const boxHeight = 1;
//   const boxDepth = 1;
//   const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

//   // Create basic mesh material for box geometry
//   const material = new THREE.MeshPhongMaterial({ color: "#E35125" });

//   // Create Cube (ie a new mesh with the box geometry and basic material for coloring the box)
//   const cube = new THREE.Mesh(geometry, material);

//   // Add the cube to Scene
//   scene.add(cube);

//   // Render the scene to canvas
//   renderer.render(scene, camera);

//   function renderCube(time) {
//     time *= 0.001; // convert time param to seconds
//     cube.rotation.x = time;
//     cube.rotation.y = time;
//     // Render the scene to canvas
//     renderer.render(scene, camera);
//     requestAnimationFrame(renderCube);
//   }
//   renderCube(5); // start the animation loop
// }
// homeCube();

// platformsection
function platformConnectingDots() {
  var canvas = document.getElementById("platforms__canvas"),
    ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var stars = [], // Array that contains the stars
    FPS = 60, // Frames per second
    x = 100, // Number of stars
    mouse = {
      x: 0,
      y: 0,
    }; // mouse location

  // Push stars to array

  for (var i = 0; i < x; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    });
  }

  // Draw the scene

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.globalCompositeOperation = "lighter";

    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      // ctx.fillStyle = "#fff";
      ctx.fillStyle = "#8B8B8B29";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
      ctx.fill();
      // ctx.fillStyle = "black";
      ctx.fillStyle = "#8B8B8B29";
      // ctx.fillStyle = "white";
      ctx.stroke();
    }

    ctx.beginPath();
    for (var i = 0, x = stars.length; i < x; i++) {
      var starI = stars[i];
      ctx.moveTo(starI.x, starI.y);
      if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
      for (var j = 0, x = stars.length; j < x; j++) {
        var starII = stars[j];
        if (distance(starI, starII) < 150) {
          //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
          ctx.lineTo(starII.x, starII.y);
        }
      }
    }
    ctx.lineWidth = 0.05;
    // ctx.strokeStyle = "white";
    ctx.strokeStyle = "#D1D1D1";
    ctx.stroke();
  }

  function distance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;

    return Math.sqrt(xs + ys);
  }

  // Update star locations

  function update() {
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
      if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
    }
  }

  canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Update and draw

  function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
  }

  tick();
}
platformConnectingDots();

// globe section
var globeAnim = lottie.loadAnimation({
  container: document.querySelector(".platform__contentGlobe"),
  renderer: "svg",
  path: "https://assets4.lottiefiles.com/packages/lf20_BjrVvLJexx.json",
  autoplay: false,
  loop: false,
});

// brain section
var brainAnim = lottie.loadAnimation({
  container: document.querySelector(".platform__contentBrain"),
  renderer: "svg",
  path: "https://assets2.lottiefiles.com/packages/lf20_bcop55ma.json",
  autoplay: false,
  loop: false,
});

function brainBtnClick(ele) {
  document.querySelectorAll(".platform__contentBrain + .platform__contentBtns .platform__contentBtn").forEach((btn) => btn.classList.remove("-active"));
  ele.classList.add("-active");
}

function globeBtnClick(ele) {
  document.querySelectorAll(".platform__contentGlobe + .platform__contentBtns .platform__contentBtn").forEach((btn) => btn.classList.remove("-active"));
  ele.classList.add("-active");
}
// testimonials swiper
const swiper = new Swiper(".testimonials__swiper", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 60,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
// testimonials swiper
const swiper2 = new Swiper(".industries__swiper", {
  direction: "horizontal",
  slidesPerView: 5,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
// news swiper
const swiper3 = new Swiper(".news__swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// counter animation
// Get all the counter elements
const counterElements = document.querySelectorAll(".countings__stat");

// Define the updateCount function
function updateCount(countElement, count) {
  countElement.textContent = count;
}

// Define the animateCount function
function animateCount(countElement, startCount, targetCount, duration, interval) {
  let count = startCount;
  const increment = Math.ceil((targetCount - startCount) / (duration / interval));

  const timer = setInterval(() => {
    count += increment;
    updateCount(countElement, count);
    if (count >= targetCount) {
      clearInterval(timer);
      count = targetCount;
      updateCount(countElement, count);
    }
  }, interval);
}

// Loop through each counter element and animate the count
counterElements.forEach((counterElement) => {
  const startCount = 0;
  const targetCount = parseInt(counterElement.getAttribute("data-count"), 10);
  const duration = 3000;
  const interval = Math.floor(duration / targetCount);

  const countElement = counterElement.querySelector(".statCount");

  animateCount(countElement, startCount, targetCount, duration, interval);
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
};