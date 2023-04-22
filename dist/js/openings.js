"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var openingForm = document.querySelector(".currentOpenings__openingsForm");
openingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var formData = new FormData(openingForm);
  // Display the key/value pairs
  var _iterator = _createForOfIteratorHelper(formData.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pair = _step.value;
      console.log("".concat(pair[0], ", ").concat(pair[1]));
    }
    // ajax reuqest
    //   const xhr = new XMLHttpRequest();
    //   xhr.open("POST", "https://example.com/api");
    //   xhr.setRequestHeader("Content-Type", "application/json");
    //   xhr.withCredentials = true;
    //   xhr.onload = function () {
    //     if (xhr.status === 200) {
    //       // process the response data here
    //     } else {
    //       // handle errors here
    //     }
    //   };
    //   xhr.onerror = function () {
    //     // handle errors here
    //   };
    //   xhr.send(formData);
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

// for second form comment for later use
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
// });
//# sourceMappingURL=openings.js.map