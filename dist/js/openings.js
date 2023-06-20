"use strict";

// var openingForm = document.querySelector(".currentOpenings__openingsForm");

// openingForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let input = document.querySelector("#location");
//   let cards = document.querySelectorAll(".currentOpenings__job");

//   // Add event listener to the input field
//   var searchValue = input.value.trim().toLowerCase();

//   // Iterate over the cards
//   cards.forEach(function (card) {
//     var location = card.getAttribute("data-location").toLowerCase();

// console.log("looped");
// console.log(`location: ${location}`);
// console.log(`value: ${searchValue}`);
// console.log(`chceck location.indexOf(searchValue) === 0: ${location.indexOf(searchValue) === 0}`);
// Check if the location starts with the search value
//   if (location.indexOf(searchValue) === 0) {
//     card.classList.add("show");
//     card.classList.remove("hide");
//   } else {
//     card.classList.add("hide");
//     card.classList.remove("show");
//   }
// });

// const formData = new FormData(openingForm);
// Display the key/value pairs
// for (const pair of formData.entries()) {
//   console.log(`${pair[0]}, ${pair[1]}`);
// }
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
// });

var fileinput = document.querySelector("#validatedInputGroupCustomFile");
fileinput.addEventListener("change", function () {
  var files = this.files;
  var label = document.querySelector('[for="validatedInputGroupCustomFile"]');
  if (files.length === 0) {
    label.textContent = "Attach CV";
  } else {
    for (const file of files) {
      // console.log(file.name);
      label.textContent = file.name;
    }
  }
});
// for second form comment for later use
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
  errorTextClass: "text-danger mt-2"
};
var formRoleLooking = document.getElementById("roleLooking");

// create the pristine instance
var pristine = new Pristine(formRoleLooking, formConfig, true);
formRoleLooking.addEventListener("submit", function (e) {
  e.preventDefault();

  // check if the form is valid
  var valid = pristine.validate(); // returns true or false
  console.log(valid);
  if (valid == true) {
    console.log("inside if condition");
    const formData = new FormData();
    formData.append("firstname", formRoleLooking.querySelector("#firstnameinput").value);
    formData.append("lastname", formRoleLooking.querySelector("#lastnameinput").value);
    formData.append("contact", formRoleLooking.querySelector("#contact").value);
    formData.append("email", formRoleLooking.querySelector("#emailinput").value);
    formData.append("cv", fileinput.files[0]);
    // Display the key/value pairs
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }

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
  }
});
//# sourceMappingURL=openings.js.map