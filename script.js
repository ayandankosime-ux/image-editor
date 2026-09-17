const resetBtn = document.querySelector('.js-btn-reset');
const downloadBtn = document.querySelector('.js-btn-download');
const removeBtn = document.querySelector('.js-btn-remove');
const replaceBtn = document.querySelector('.js-btn-replace');
const previewImage = document.getElementById('previewImage');

const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const blur = document.getElementById('blur');
const grayscale = document.getElementById('grayscale');

const brightnessVal = document.querySelector('.js-brightness-amount');
const contrastVal = document.querySelector('.js-contrast-amount');
const blurVal = document.querySelector('.js-blur-amount');
const grayscaleVal = document.querySelector('.js-grayscale-amount');

brightness.addEventListener('change', () => {
  previewImage.style.filter = `brightness(${brightness.value}%)`;
  brightnessVal.textContent = brightness.value;
});

contrast.addEventListener('change', () => {
  previewImage.style.filter = `contrast(${contrast.value}%)`;
  contrastVal.textContent = contrast.value;
});

blur.addEventListener('change', () => {
  previewImage.style.filter =  `blur(${blur.value}px)`;
  blurVal.textContent = blur.value;
});

grayscale.addEventListener('change', () => {
  previewImage.style.filter = `grayscale(${grayscale.value}%)`;
  grayscaleVal.textContent = grayscale.value;
})