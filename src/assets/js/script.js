function appMain() {
/*
const changeTheme = document.querySelector(".change-theme");
let theme = localStorage.getItem("theme");
changeTheme.addEventListener('click', () => {
    if (theme === "dark") {
        document.querySelector("html").classList.remove("dark");
        document.querySelector("html").classList.add("light");
        theme = "light";
    } else {
        document.querySelector("html").classList.add("dark");
        document.querySelector("html").classList.remove("light");
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
});
if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
}
if (theme === "light") {
    document.querySelector("html").classList.add("light");
};
*/

  // Lazy blur images
  if (document.querySelector(".blur-load")) {
    const blurImgWrap = document.querySelectorAll(".blur-load");
    blurImgWrap.forEach((item) => {
      const img = item.querySelector("picture img");
      function loaded() {
        item.classList.add("loaded");
      }
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    });
  }

if (document.querySelector('.swiper')) {
  var swiper = new Swiper(".swiper", {
    grabCursor: true,
    spaceBetween: 20,
    lazyPreloadPrevNext: 1,
    centeredSlides: false,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    keyboard: {
      enabled: true
    },
    mousewheel: false,
    breakpoints: {
      460: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
};





if(document.querySelector('.multiform')) {
  
const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
const isEmpty = (str) => !str.trim().length
let currentStep = 0

// Validate first input on load
validateEntry()

// Next: Change UI relative to current step and account for button permissions
nextButton.addEventListener('click', (event) => {
  event.preventDefault()

  // Hide current tab
  tabPanels[currentStep].classList.add('hidden')
  tabTargets[currentStep].classList.remove('active')

  // Show next tab
  tabPanels[currentStep + 1].classList.remove('hidden')
  tabTargets[currentStep + 1].classList.add('active')
  currentStep += 1
  
  validateEntry()
  updateStatusDisplay()
})

// Previous: Change UI relative to current step and account for button permissions
previousButton.addEventListener('click', (event) => {
  event.preventDefault()

  // Hide current tab
  tabPanels[currentStep].classList.add('hidden')
  tabTargets[currentStep].classList.remove('active')

  // Show previous tab
  tabPanels[currentStep - 1].classList.remove('hidden')
  tabTargets[currentStep - 1].classList.add('active')
  currentStep -= 1

  nextButton.removeAttribute('disabled')
  updateStatusDisplay()
})


function updateStatusDisplay() {
  // If on the last step, hide the next button and show submit
  if (currentStep === tabTargets.length - 1) {
    nextButton.classList.add('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.remove('hidden')
    validateEntry()

    // If it's the first step hide the previous button
  } else if (currentStep == 0) {
    nextButton.classList.remove('hidden')
    previousButton.classList.add('hidden')
    submitButton.classList.add('hidden')
    // In all other instances display both buttons
  } else {
    nextButton.classList.remove('hidden')
    previousButton.classList.remove('hidden')
    submitButton.classList.add('hidden')
  }
}

function validateEntry() {
  let input = tabPanels[currentStep].querySelector('.form-input')
  
  // Start but disabling continue button
  nextButton.setAttribute('disabled', true)
  submitButton.setAttribute('disabled', true)
  
  // Validate on initial function fire
  setButtonPermissions(input)
  
  // Validate on input
  input.addEventListener('input', () => setButtonPermissions(input))
  // Validate if bluring from input
  input.addEventListener('blur', () => setButtonPermissions(input))
}

function setButtonPermissions(input) {
  if (isEmpty(input.value) && input.classList.contains('required') ) { 
    nextButton.setAttribute('disabled', true)
    submitButton.setAttribute('disabled', true)
  } else {
    nextButton.removeAttribute('disabled')
    submitButton.removeAttribute('disabled')
  }
}

}

};
