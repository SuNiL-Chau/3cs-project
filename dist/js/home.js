"use strict";

// window.onresize = function () { location.reload(); }
// window.onload = function () {
//   console.clear();
// };

if (window.innerWidth <= 768) {
  document.querySelectorAll("button[data-aos='fade-left']").forEach(function (btn) {
    btn.setAttribute("data-aos", "fade-in");
  });
}

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
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: false
    }
  }
});
var testimonialsWrapperHeight = document.querySelector(".testimonials__swiper .swiper-wrapper");
testimonialsWrapperHeight ? testimonialsWrapperHeight.style.height = testimonialsWrapperHeight.offsetHeight + "px" : null;
window.onload = function () {
  setTimeout(function () {
    var testimonialsWrapperHeight = document.querySelector(".testimonials__swiper .swiper-wrapper");
    testimonialsWrapperHeight ? testimonialsWrapperHeight.style.height = testimonialsWrapperHeight.offsetHeight + "px" : null;
  }, 500);
};

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
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets"
      }
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
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
var services__Swiper = new Swiper("#servicesSwiper", {
  breakpoints: {
    320: {
      direction: "horizontal",
      loop: true,
      slidesPerView: "1",
      slidesPerGroup: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 3000
      }
    },
    // when window width is >= 640px
    1024: {
      direction: "vertical",
      slidesPerView: "auto",
      autoplay: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
var execution__Swiper = new Swiper("#executionSwiper", {
  breakpoints: {
    320: {
      direction: "horizontal",
      loop: true,
      // slidesPerView: 2,
      slidesPerView: "1",
      slidesPerGroup: 1,
      // spaceBetween: 30,
      autoplay: {
        delay: 4000
      }
    },
    // when window width is >= 640px
    1024: {
      direction: "vertical",
      slidesPerView: "auto",
      autoplay: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
var planning__Swiper = new Swiper("#planingSwiper", {
  breakpoints: {
    320: {
      direction: "horizontal",
      loop: true,
      // slidesPerView: 2,
      slidesPerView: "1",
      slidesPerGroup: 1,
      // spaceBetween: 30,
      autoplay: {
        delay: 4000
      }
    },
    // when window width is >= 640px
    1024: {
      direction: "vertical",
      slidesPerView: "auto",
      autoplay: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
if (window.innerWidth < 1024) {
  var servicesLottie = document.querySelector("#servicesLottie");
  servicesLottie.setAttribute("autoplay", "");
  servicesLottie.setAttribute("loop", "");
  servicesLottie.play();
  services__Swiper.autoplay.start();
  // var planingLottie = document.querySelector("#planningLottie");
  // planingLottie.setAttribute("autoplay", "");
  // planingLottie.setAttribute("loop", "");
  // planingLottie.play();
  // planning__Swiper.autoplay.start();
  // var executionLottie = document.querySelector("#executionLottie");
  // executionLottie.setAttribute("autoplay", "");
  // executionLottie.setAttribute("loop", "");
  // executionLottie.play();
  // execution__Swiper.autoplay.start();
} else {
  LottieInteractivity.create({
    player: "#servicesLottie",
    mode: "scroll",
    container: ".services",
    actions: [{
      // visibility: [0.15, 0.75],
      visibility: [0.2, 1],
      type: "seek",
      frames: [90, 480]
    }]
  });
  // LottieInteractivity.create({
  //   player: "#planningLottie",
  //   mode: "scroll",
  //   container: ".-planningLottieContainer",
  //   actions: [
  //     {
  //       visibility: [0.2, 1],
  //       type: "seek",
  //       // frames: [0, 176],
  //       frames: [25, 155],
  //     },
  //   ],
  // });
  // LottieInteractivity.create({
  //   player: "#executionLottie",
  //   mode: "scroll",
  //   container: ".-executionLottieContainer",
  //   actions: [
  //     {
  //       visibility: [0.2, 0.7],
  //       type: "seek",
  //       frames: [0, 228],
  //     },
  //   ],
  // });
}

// swiper check for desk and mobile
var platform__contentBtns__Swiper = new Swiper("#scaiswiper", {
  breakpoints: {
    320: {
      direction: "horizontal",
      loop: true,
      // slidesPerView: 2,
      slidesPerView: "auto",
      // slidesPerGroup: 1,
      slidesPerGroup: 2,
      // spaceBetween: 30,
      autoplay: {
        delay: 4000
      }
    },
    // when window width is >= 640px
    1024: {
      direction: "vertical",
      slidesPerView: "auto",
      autoplay: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});
var platform2__contentBtns__Swiper = new Swiper("#itmsswiper", {
  breakpoints: {
    320: {
      direction: "horizontal",
      loop: true,
      // slidesPerView: 3,
      slidesPerView: "auto",
      slidesPerGroup: 3,
      // slidesPerGroup: 2,
      // spaceBetween: 30,
      autoplay: {
        delay: 4000
      }
    },
    // when window width is >= 640px
    1024: {
      direction: "vertical",
      slidesPerView: "auto",
      autoplay: false
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  }
});

// If they ask for normal play

if (window.innerWidth < 1024) {
  var scaiContainer = document.querySelector("#scai");
  scaiContainer.style.minHeight = "max-content";
  var scaiLottie = document.querySelector("#scaiLottie");
  scaiLottie.setAttribute("autoplay", "");
  scaiLottie.setAttribute("loop", "");
  scaiLottie.play();
  platform__contentBtns__Swiper.autoplay.start();
  var itmsContainer = document.querySelector("#itms");
  itmsContainer.style.minHeight = "max-content";
  var itmsLottie = document.querySelector("#itmsLottie");
  itmsLottie.setAttribute("autoplay", "");
  itmsLottie.setAttribute("loop", "");
  itmsLottie.play();
  platform2__contentBtns__Swiper.autoplay.start();
} else {
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
    if (percentage >= 20) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[0].setAttribute("data-aos", btns[0].dataset.aosAnim);
      btns[0].classList.add("aos-init");
      btns[0].classList.add("aos-animate");
      btns[0].classList.add("swiper-slide-active");
    }
    if (percentage >= 40) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[1].setAttribute("data-aos", btns[1].dataset.aosAnim);
      btns[1].classList.add("aos-init");
      btns[1].classList.add("aos-animate");
      btns[1].classList.add("swiper-slide-active");
    }
    if (percentage >= 60) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[2].setAttribute("data-aos", btns[2].dataset.aosAnim);
      btns[2].classList.add("aos-init");
      btns[2].classList.add("aos-animate");
      btns[2].classList.add("swiper-slide-active");
    }
    if (percentage >= 80) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[3].setAttribute("data-aos", btns[3].dataset.aosAnim);
      btns[3].classList.add("aos-init");
      btns[3].classList.add("aos-animate");
      btns[3].classList.add("swiper-slide-active");
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
    var btnsParent = document.querySelector("#itms .platform__contentBtns");
    if (percentage >= 20) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[0].setAttribute("data-aos", btns[0].dataset.aosAnim);
      btns[0].classList.add("aos-init");
      btns[0].classList.add("aos-animate");
      btns[0].classList.add("swiper-slide-active");
    }
    if (percentage >= 30) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[1].setAttribute("data-aos", btns[1].dataset.aosAnim);
      btns[1].classList.add("aos-init");
      btns[1].classList.add("aos-animate");
      btns[1].classList.add("swiper-slide-active");
    }
    if (percentage >= 40) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[2].setAttribute("data-aos", btns[2].dataset.aosAnim);
      btns[2].classList.add("aos-init");
      btns[2].classList.add("aos-animate");
      btns[2].classList.add("swiper-slide-active");
    }
    if (percentage >= 50) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[3].setAttribute("data-aos", btns[3].dataset.aosAnim);
      btns[3].classList.add("aos-init");
      btns[3].classList.add("aos-animate");
      btns[3].classList.add("swiper-slide-active");
    }
    if (percentage >= 60) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[4].setAttribute("data-aos", btns[4].dataset.aosAnim);
      btns[4].classList.add("aos-init");
      btns[4].classList.add("aos-animate");
      btns[4].classList.add("swiper-slide-active");
    }
    if (percentage >= 70) {
      btns.forEach(function (btn) {
        return btn.classList.remove("swiper-slide-active");
      });
      btns[5].setAttribute("data-aos", btns[5].dataset.aosAnim);
      btns[5].classList.add("aos-init");
      btns[5].classList.add("aos-animate");
      btns[5].classList.add("swiper-slide-active");
    }
  });
  LottieInteractivity.create({
    player: itmsplayer,
    mode: "scroll",
    container: "#itms",
    actions: [{
      visibility: [0.1, 0.9],
      type: "seek",
      frames: [0, 254]
    }]
  });
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
if (window.innerWidth < 1024) {
  particlesJS.load("platforms__canvas", "assets/particlesjs-config-less.json", function () {});
  particlesJS.load("services__canvas", "assets/particlesjs-config-less.json", function () {});
  // particlesJS.load("countings__canvas", "assets/particlesjs-config-less.json", function () {});
  // particlesJS.load("news__canvas", "assets/particlesjs-config-less.json", function () {});
} else {
  particlesJS.load("platforms__canvas", "assets/particlesjs-config.json", function () {});
  particlesJS.load("services__canvas", "assets/particlesjs-config.json", function () {});
  // particlesJS.load("countings__canvas", "assets/particlesjs-config-less.json", function () {});
  // particlesJS.load("news__canvas", "assets/particlesjs-config-less.json", function () {});
}
//# sourceMappingURL=home.js.map