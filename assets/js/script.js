'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });  // remove



// reference variables
// const referenceItem = document.querySelectorAll("[data-reference-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
// const referenceModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// add click event to all modal items
// for (let i = 0; i < referenceItem.length; i++) {

//   referenceItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-reference-avatar]").src;
//     modalImg.alt = this.querySelector("[data-reference-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-reference-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-reference-text]").innerHTML;

//     referenceModalFunc();

//   });

// }

// add click event to modal close button
// modalCloseBtn.addEventListener("click", referenceModalFunc);
// overlay.addEventListener("click", referenceModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav link
// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function () {

//     for (let i = 0; i < pages.length; i++) {
//       if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }

//   });
// }










// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // This function updates the URL without reloading the page
// function updateUrlWithoutReload(route) {
//   history.pushState({}, "", route);
// }

// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default behavior of following the link

//     const targetPage = this.innerHTML.toLowerCase();

//     // Update the URL
//     updateUrlWithoutReload(`/${targetPage}`);

//     for (let i = 0; i < pages.length; i++) {
//       if (targetPage === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }
//   });
// }




// This part is for NavBar

// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // This function updates the URL without reloading the page
// function updateUrlWithoutReload(route) {
//   history.pushState({}, "", route);
// }

// for (let i = 0; i < navigationLinks.length; i++) {
//   navigationLinks[i].addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent the default behavior of following the link

//     const targetPage = this.dataset.page; // Get the page name from data-page attribute

//     // Update the URL
//     updateUrlWithoutReload(`/${targetPage}`);

//     for (let i = 0; i < pages.length; i++) {
//       if (targetPage === pages[i].dataset.page) {
//         pages[i].classList.add("active");
//         navigationLinks[i].classList.add("active");
//         window.scrollTo(0, 0);
//       } else {
//         pages[i].classList.remove("active");
//         navigationLinks[i].classList.remove("active");
//       }
//     }
//   });
// }


const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// This function updates the URL without reloading the page
function updateUrlWithoutReload(route) {
  history.pushState({}, "", route);
}

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of following the link

    const targetPage = this.dataset.page; // Get the page name from data-page attribute

    // Update the URL hash routing
    updateUrlWithoutReload(`#/${targetPage}`);

    for (let i = 0; i < pages.length; i++) {
      if (targetPage === pages[i].dataset.page) {
        pages[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
      }
    }
  });
}











// function showFullDescription() {
//   const shortDesc = document.querySelector('.short-description');
//   const fullDesc = document.querySelector('.full-description');

//   shortDesc.classList.add('hidden');
//   fullDesc.classList.add('show-full');
// }

// function showShortDescription() {
//   const shortDesc = document.querySelector('.short-description');
//   const fullDesc = document.querySelector('.full-description');

//   shortDesc.classList.remove('hidden');
//   fullDesc.classList.remove('show-full');
// }





function showFullDescription(index) {
  const projectItem = document.querySelectorAll('.project-item')[index - 1];
  const shortDesc = projectItem.querySelector('.short-description');
  const fullDesc = projectItem.querySelector('.full-description');

  shortDesc.style.display = 'none';
  fullDesc.style.display = 'block';
}

function showShortDescription(index) {
  const projectItem = document.querySelectorAll('.project-item')[index - 1];
  const shortDesc = projectItem.querySelector('.short-description');
  const fullDesc = projectItem.querySelector('.full-description');

  shortDesc.style.display = 'block';
  fullDesc.style.display = 'none';
}





function openCV() {
  window.open("https://drive.google.com/file/d/1GME2P_V4lmAf6KD5tZiNZUrTI0s89QRd/view?usp=sharing", "_blank");
}

