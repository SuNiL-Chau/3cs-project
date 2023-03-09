document.body.style.opacity = 0;

gsap.registerPlugin(ScrollTrigger);

// gsap split-text-animation
window.addEventListener("DOMContentLoaded", (event) => {
  gsap.to(document.body, {
    autoAlpha: 1,
    duration: 3,
    delay: 1,
    ease: "sine.inOut",
  });

  setTimeout(() => {
    // image span animation
    var spanImages = Array.from(document.querySelectorAll("[data-span-img]"));

    spanImages.map((pic) => {
      let img = pic.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pic,
        },
      });

      tl.from(img, {
        autoAlpha: 0,
        y: "50%",
        ease: "sine.inOut",
        duration: 1.5,
      });
    });

    var spanImages2 = Array.from(document.querySelectorAll("[data-anim-height]"));

    spanImages2.map((pic) => {
      // let img = pic.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pic,
        },
      });

      tl.from(pic, {
        autoAlpha: 0,
        y: "25%",
        ease: "sine.inOut",
        duration: 1.5,
      });
    });

    // image parallax animation
    gsap.utils.toArray("[data-span-img] img").forEach((section, i) => {
      const heightDiff = section.offsetHeight - section.parentElement.offsetHeight;

      gsap.fromTo(
        section,
        {
          y: -(heightDiff + 10),
        },
        {
          scrollTrigger: {
            trigger: section.closest(".section"),
            scrub: true,
            start: "top bottom",
            // end: "bottom center",
            marker: true,
          },
          y: 0,
          ease: "sine.inOut",
        }
      );
    });

    // scale project images
    var scaleImages = Array.from(document.querySelectorAll("[data-scale-img]"));
    scaleImages.map(function (img) {
      var cImg = img.querySelector("img");
      var cFigure = img.parentElement;
      let hover;
      cFigure.addEventListener(
        "mouseover",
        function (event) {
          if (!hover) {
            gsap.to(cImg, { transformOrigin: "50% 50%", scale: 1.05, ease: "none" });
          }
          hover = true;
        },
        false
      );

      cFigure.addEventListener(
        "mouseleave",
        function (event) {
          hover = false;
          gsap.to(cImg, { transformOrigin: "50% 50%", scale: 1, ease: "none" });
        },
        false
      );
    });

    // content heading animation
    var splitedTextH = Array.from(document.querySelectorAll("[data-heading-anim]"));
    splitedTextH.map(function (node) {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: "top bottom",
          // end: "center center",
          force3D: true,
        },
        y: "10px",
        autoAlpha: 0,
        duration: 0.5,
      });
    });

    // content para animation
    var splitedTextP = document.querySelectorAll("[data-para-anim]");
    var splitedCaption = document.querySelectorAll(".figure__caption");
    splitedTextP.forEach(function (para) {
      Splitting({
        target: para,
        by: "words",
        whitespace: true,
      });
      var spans = para.querySelectorAll("span");
      gsap.from(spans, {
        scrollTrigger: {
          trigger: para,
          start: "top bottom",
          // end: "center center",
          force3D: true,
        },
        y: "5px",
        autoAlpha: 0,
        stagger: 0.03,
        duration: 0.3,
      });
    });
    splitedCaption.forEach(function (para) {
      Splitting({
        target: para,
        by: "words",
        whitespace: true,
      });
      var spans = para.querySelectorAll("span");
      gsap.from(spans, {
        scrollTrigger: {
          trigger: para,
          start: "top bottom",
          // end: "center center",
          force3D: true,  
        },
        y: "5px",
        autoAlpha: 0,
        stagger: 0.03,
        duration: 0.3,
      });
    });

    // banner heading animation
    var splitedBannerHeading = document.querySelector("[data-banner-head-anim]");
    gsap.from(splitedBannerHeading, {
      duration: 1,
      // delay: -1,
      ease: "sine.inOut",
      // force3D: true,
      y: "10px",
      autoAlpha: 0,
    });

    // header image 1
    var headerImage1 = Array.from(document.querySelectorAll(".header .header__img-flat")).slice(0, 1);
    var headerImage2 = Array.from(document.querySelectorAll(".header .header__img-flat")).slice(-1);
    gsap.from(headerImage1, {
      width: 0,
      duration: 1.5,
      delay: 1,
      ease: "sine.inOut",
    });
    gsap.from(headerImage2, {
      width: 0,
      duration: 1.5,
      delay: 1,
      ease: "sine.inOut",
    });

    // Header banner img animation
    var headerBannerImg = document.querySelector("[data-banner-img-anim]");
    gsap.from(headerBannerImg, {
      // height: "100vh",
      y: "5vh",
      autoAlpha: 0,
      duration: 2,
      delay: 1.5,
      ease: "sine.inOut",
    });

    var instaSec = document.querySelector(".instagram__section__contain");
    gsap.from(instaSec, {
      scrollTrigger: {
        trigger: instaSec,
        start: "top bottom",
        // end: "center center",
        force3D: true,
      },
      y: "5vh",
      autoAlpha: 0,
      duration: 2,
      delay: 1,
      ease: "sine.inOut",
    });
  }, 2000);
});
