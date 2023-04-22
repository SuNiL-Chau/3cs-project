var openingForm = document.querySelector(".currentOpenings__openingsForm");

openingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(openingForm);
  // Display the key/value pairs
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}, ${pair[1]}`);
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
