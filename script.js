//Word Effect
const dynamicTexts = document.querySelectorAll("h1 span");
const wordsList = ["Best", "Talents"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = wordsList[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  dynamicTexts[wordIndex].textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
      wordIndex = (wordIndex + 1) % wordsList.length;
    }
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();



// Open and Close Hambuger Menu
$(document).ready(function(){
    $('.btn').click(function(){
      $('.items').toggleClass("show");
      $('ul li').toggleClass("hide");
    });
});



window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
      nav.classList.add("scrolled");
  } else {
      nav.classList.remove("scrolled");
  }
});


//
const navLinkEls = document.querySelectorAll('.items a[href="#section0"], .items a[href="#section1"], .items a[href="#section2"], .items a[href="#section3"], .items a[href="#section4"], .items a[href="#section5"]');
const sectionEls = document.querySelectorAll('section');

navLinkEls.forEach(navLinkEl => {
  if (navLinkEl.getAttribute('href') === '#section0') {
    navLinkEl.classList.add('active');
  }
});

window.addEventListener('scroll', () => {
  let currentSection = '';
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= sectionEl.offsetTop) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    // if (navLinkEl.getAttribute('href') === `#${currentSection}`) {
    //   navLinkEl.classList.add('active');
    // } else {
    //   navLinkEl.classList.remove('active');
    // }
    navLinkEl.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      navLinkEl.classList.add('active');
    });
  });
});

navLinkEls.forEach(navLinkEl => {
  navLinkEl.addEventListener('click', () => {
    navLink.classList.remove('active');
  });
});


