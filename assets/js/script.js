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
const navBrand = document.querySelector("[data-nav-brand]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");

function closeNavMenu() {
  if (navMenu) navMenu.classList.remove("open");
  if (navToggle) {
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      closeNavMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNavMenu();
    }
  });
}

// This function updates the URL without reloading the page
function updateUrlWithoutReload(route) {
  history.pushState({}, "", route);
}

function activatePage(targetPage) {
  updateUrlWithoutReload(`#/${targetPage}`);
  closeNavMenu();

  for (let i = 0; i < pages.length; i++) {
    if (targetPage === pages[i].dataset.page) {
      pages[i].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
    }
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    if (targetPage === navigationLinks[i].dataset.page) {
      navigationLinks[i].classList.add("active");
    } else {
      navigationLinks[i].classList.remove("active");
    }
  }
}

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
    activatePage(this.dataset.page);
  });
}

if (navBrand) {
  navBrand.addEventListener("click", function () {
    activatePage("home");
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





const copyrightYearEl = document.querySelector(".copyright-year");
if (copyrightYearEl) {
  copyrightYearEl.textContent = new Date().getFullYear();
}

/* CV PDF Viewer Modal */
const CV_PDF_URL = "/assets/aistudio/CV_TIS_2026_7e964248.pdf";
const CV_DOWNLOAD_FILENAME = "Torikul_Islam_Sanjid_CV_2026.pdf";

const cvTrigger = document.querySelector("[data-cv-trigger]");
const cvModal = document.querySelector("[data-cv-modal]");
const cvCloseBtns = document.querySelectorAll("[data-cv-close]");
const cvStatus = document.querySelector("[data-cv-status]");
const cvPagesContainer = document.querySelector("[data-cv-pages]");
const cvPageInfo = document.querySelector("[data-cv-page-info]");
const cvZoomInBtn = document.querySelector("[data-cv-zoom-in]");
const cvZoomOutBtn = document.querySelector("[data-cv-zoom-out]");
const cvZoomLabel = document.querySelector("[data-cv-zoom-label]");
const cvDownloadBtn = document.querySelector("[data-cv-download]");
const cvModalBody = document.querySelector("[data-cv-body]");

let cvPdfBytes = null;
let cvPdfDoc = null;
let cvZoom = 1.0;
let cvRenderSeq = 0;

function updateZoomLabel() {
  if (cvZoomLabel) {
    cvZoomLabel.textContent = `${Math.round(cvZoom * 100)}%`;
  }
}

async function fetchCvBytes() {
  if (cvPdfBytes) return cvPdfBytes;
  const response = await fetch(CV_PDF_URL, { credentials: "same-origin" });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const buffer = await response.arrayBuffer();
  cvPdfBytes = new Uint8Array(buffer);
  return cvPdfBytes;
}

async function loadCvPdfDoc() {
  if (cvPdfDoc) return cvPdfDoc;
  const pdfModuleUrl = new URL("./vendor/pdfjs/pdf.min.mjs", window.location.href).href;
  const workerModuleUrl = new URL("./vendor/pdfjs/pdf.worker.min.mjs", window.location.href).href;
  const standardFontDataUrl = new URL("./vendor/pdfjs/standard_fonts/", window.location.href).href;

  const [pdfjsLib, workerModule] = await Promise.all([
    import(pdfModuleUrl),
    import(workerModuleUrl),
  ]);

  if (!globalThis.pdfjsWorker && workerModule) {
    globalThis.pdfjsWorker = workerModule;
  }
  pdfjsLib.GlobalWorkerOptions.workerSrc = workerModuleUrl;

  const bytes = await fetchCvBytes();
  const loadingTask = pdfjsLib.getDocument({
    data: bytes.slice(),
    standardFontDataUrl,
    isEvalSupported: false,
  });
  cvPdfDoc = await loadingTask.promise;
  return cvPdfDoc;
}

async function renderCvPages() {
  if (!cvPagesContainer || !cvStatus) return;
  const currentSeq = ++cvRenderSeq;

  cvStatus.textContent = "Loading CV...";
  cvStatus.classList.remove("hidden");

  try {
    const pdfDoc = await loadCvPdfDoc();
    if (currentSeq !== cvRenderSeq) return;

    const totalPages = pdfDoc.numPages;
    if (cvPageInfo) {
      cvPageInfo.textContent = `(${totalPages} ${totalPages === 1 ? "page" : "pages"})`;
    }

    const availableWidth = Math.max(
      280,
      Math.min(820, (cvModalBody ? cvModalBody.clientWidth : 820) - 48)
    );
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const fragment = document.createDocumentFragment();

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      if (currentSeq !== cvRenderSeq) return;

      const baseViewport = page.getViewport({ scale: 1 });
      const fitScale = availableWidth / baseViewport.width;
      const cssScale = fitScale * cvZoom;
      const cssViewport = page.getViewport({ scale: cssScale });
      const renderViewport = page.getViewport({ scale: cssScale * dpr });

      const canvas = document.createElement("canvas");
      canvas.className = "cv-page-canvas";
      canvas.width = Math.floor(renderViewport.width);
      canvas.height = Math.floor(renderViewport.height);
      canvas.style.width = `${Math.floor(cssViewport.width)}px`;
      canvas.style.height = `${Math.floor(cssViewport.height)}px`;
      canvas.setAttribute("aria-label", `CV Page ${pageNum} of ${totalPages}`);

      await page.render({ canvas, viewport: renderViewport }).promise;
      if (currentSeq !== cvRenderSeq) return;

      fragment.appendChild(canvas);
    }

    cvPagesContainer.innerHTML = "";
    cvPagesContainer.appendChild(fragment);
    cvStatus.classList.add("hidden");
  } catch (err) {
    if (currentSeq !== cvRenderSeq) return;
    console.error("Failed to render CV PDF:", err);
    cvStatus.textContent = "Unable to preview the PDF inline. Use the Download PDF button above to save the CV.";
    cvStatus.classList.remove("hidden");
  }
}

function openCvModal() {
  if (!cvModal) return;
  cvModal.classList.add("active");
  cvModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  updateZoomLabel();
  renderCvPages();
}

function closeCvModal() {
  if (!cvModal) return;
  cvModal.classList.remove("active");
  cvModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (cvTrigger && cvModal) {
  cvTrigger.addEventListener("click", function (event) {
    event.preventDefault();
    openCvModal();
  });

  for (let i = 0; i < cvCloseBtns.length; i++) {
    cvCloseBtns[i].addEventListener("click", closeCvModal);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && cvModal.classList.contains("active")) {
      closeCvModal();
    }
  });
}

if (cvZoomInBtn) {
  cvZoomInBtn.addEventListener("click", function () {
    cvZoom = Math.min(2.0, Math.round((cvZoom + 0.2) * 10) / 10);
    updateZoomLabel();
    renderCvPages();
  });
}

if (cvZoomOutBtn) {
  cvZoomOutBtn.addEventListener("click", function () {
    cvZoom = Math.max(0.6, Math.round((cvZoom - 0.2) * 10) / 10);
    updateZoomLabel();
    renderCvPages();
  });
}

if (cvDownloadBtn) {
  cvDownloadBtn.addEventListener("click", async function (event) {
    event.preventDefault();
    try {
      const bytes = await fetchCvBytes();
      const blob = new Blob([bytes], { type: "application/pdf" });
      const blobUrl = URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = blobUrl;
      tempLink.download = CV_DOWNLOAD_FILENAME;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
    } catch (_err) {
      window.location.href = `${CV_PDF_URL}?download=1`;
    }
  });
}

