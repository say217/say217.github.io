

'use strict';

// Function to toggle the active class on an element
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Modal testimonial functionality
const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const testimonialsModalFunc = function () {
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
}

for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener('click', function () {
        modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
        modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
        modalTitle.innerHTML = this.querySelector('[data-testimonials-title]').innerHTML;
        modalText.innerHTML = this.querySelector('[data-testimonials-text]').innerHTML;

        testimonialsModalFunc();
    });
}

// Close modal functionality
modalCloseBtn.addEventListener('click', testimonialsModalFunc);
overlay.addEventListener('click', testimonialsModalFunc);

// Filter select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {
    elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}

const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
        if (selectedValue == "all") {
            filterItems[i].classList.add('active');
        } else if (selectedValue == filterItems[i].dataset.category) {
            filterItems[i].classList.add('active');
        } else {
            filterItems[i].classList.remove('active');
        }
    }
}

// Filter button functionality for larger screens
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener('click', function () {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove('active');
        this.classList.add('active');
        lastClickedBtn = this;
    });
}

// Contact form functionality
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('input', function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute('disabled');
        } else {
            formBtn.setAttribute('disabled', '');
        }
    });
}

// Page navigation functionality
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
        for (let j = 0; j < pages.length; j++) {
            if (this.innerHTML.toLowerCase() == pages[j].dataset.page) {
                pages[j].classList.add('active');
                navigationLinks[j].classList.add('active');
                window.scrollTo(0, 0);
            } else {
                pages[j].classList.remove('active');
                navigationLinks[j].classList.remove('active');
            }
        }
    });
}