const resetBtn = document.querySelector('.js-btn-reset');
const downloadBtn = document.querySelector('.js-btn-download');
const removeBtn = document.querySelector('.js-btn-remove');
const replaceBtn = document.querySelector('.js-btn-replace');
const previewImage = document.getElementById('previewImage');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.querySelector('.js-btn-upload-image');
const uploadNotification = document.querySelector('.js-uploaded-box');
const notificationText = document.querySelector('.js-notification-text');

const brightness = document.getElementById('brightness');
const contrast = document.getElementById('contrast');
const blur = document.getElementById('blur');
const grayscale = document.getElementById('grayscale');

const brightnessVal = document.querySelector('.js-brightness-amount');
const contrastVal = document.querySelector('.js-contrast-amount');
const blurVal = document.querySelector('.js-blur-amount');
const grayscaleVal = document.querySelector('.js-grayscale-amount');

brightness.value = 100;
contrast.value = 100;
blur.value = 0;
grayscale.value = 0;

brightness.addEventListener('change', () => {
  applyFilter();
});

contrast.addEventListener('change', () => {
  applyFilter();
});

blur.addEventListener('change', () => {
  applyFilter();
});

grayscale.addEventListener('change', () => {
  applyFilter()}
);

function applyFilter() {
  previewImage.style.filter = `brightness(${brightness.value}%) contrast(${contrast.value}%) blur(${blur.value}px) grayscale(${grayscale.value}%)`


  filterValues();
}

function resetFilter() {
  brightness.value = 100;
  contrast.value = 100;
  blur.value = 0;
  grayscale.value = 0;

  filterValues();
  applyFilter();
}

function filterValues() {
  brightnessVal.textContent = brightness.value;
  contrastVal.textContent = contrast.value;
  blurVal.textContent = blur.value;
  grayscaleVal.textContent = grayscale.value;
}

uploadBtn.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  previewImage.src = URL.createObjectURL(fileInput.files[0]);
  uploadBtn.classList.add('not-visible');

  uploadNotification.classList.remove('not-visible');
  
  setTimeout(() => {
    uploadNotification.classList.add('not-visible');
  }, 1500);

  const num = fileInput.files[0].size / (1024 * 1024);
  notificationText.innerHTML = `uploaded-${fileInput.files[0].name} - ${num.toFixed(2)} MB`;

  resetFilter();
});

removeBtn.addEventListener('click', () => {
  previewImage.src = '';
  fileInput.value = '';
  uploadBtn.classList.remove('not-visible');

});

replaceBtn.addEventListener('click', () => {
  fileInput.click();
});




downloadBtn.addEventListener('click', () => {
  if (!previewImage.src) return alert('No image to download!');

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = previewImage.naturalWidth;
  canvas.height = previewImage.naturalHeight;

  ctx.filter = previewImage.style.filter;
  ctx.drawImage(previewImage, 0, 0);

  const link = document.createElement('a');
  link.download = `edited-image.jpeg`;
  link.href = canvas.toDataURL('image/jpeg');
  link.click();
});

resetBtn.addEventListener('click', () => {
  resetFilter();
});

