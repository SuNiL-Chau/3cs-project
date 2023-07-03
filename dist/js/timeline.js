"use strict";

var _swiperBundleEsmBrowserMin = _interopRequireDefault(require("./libs/swiper-bundle.esm.browser.min.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// var paginationList = document.querySelectorAll(".swiper-pagination>.timeline__date");
// var paginationArrayList = Array.from(paginationList);
// var paginationData = paginationArrayList.map(function (pagination) {
//   return pagination.textContent;
// });
// // console.log(paginationData);

// const swiper = new Swiper(".swiper1", {
//   // Optional parameters
//   direction: "horizontal",
//   slidesPerView: 1,
//   spaceBetween: 20,
//   //   custom pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + paginationData[index] + "</span>";
//     },
//   },
// });

var projectswiper = new _swiperBundleEsmBrowserMin.default(".project-swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".project-swiper .swiper-pagination"
  },
  navigation: {
    nextEl: ".project-swiper .swiper-button-next",
    prevEl: ".project-swiper .swiper-button-prev"
  }
});
//# sourceMappingURL=timeline.js.map