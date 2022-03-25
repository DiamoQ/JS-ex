const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const elementlist = document.querySelector('#elements');
const computedStyles = getComputedStyle(elementlist);
const elements = document.querySelectorAll(".slider__element");

const minRight = 0;
const elementWidth = getComputedStyle(elements[0]).width;
const step = parseInt(elementWidth);
const preShownElements = 300 / step;
const maxRight = (elements.length - preShownElements) * step;
let currentRight = 0;

elementlist.style.right = currentRight;

rightBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    elementlist.style.right = `${currentRight}px`;
  }
})

leftBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    elementlist.style.right = `${currentRight}px`;
  }
})
