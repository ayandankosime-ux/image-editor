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

brightness.addEventListener('change', () => {
  imageAdjustments(brightness, brightnessVal);
});

contrast.addEventListener('change', () => {
  imageAdjustments(contrast, contrastVal);
});

blur.addEventListener('change', () => {
  imageAdjustments( blur, blurVal);
});

grayscale.addEventListener('change', () => {
  imageAdjustments(grayscale, grayscaleVal);
})

resetBtn.addEventListener('click', () => {
  brightness.value = 100;
  contrast.value = 100;
  blur.value = 0;
  grayscale.value = 0;

  previewImage.style.filter = `brightness(${brightness.value}%)`;
  brightnessVal.textContent = brightness.value;
  previewImage.style.filter = `contrast(${contrast.value}%)`;
  contrastVal.textContent = contrast.value;
  previewImage.style.filter =  `blur(${blur.value}px)`;
  blurVal.textContent = blur.value;
  previewImage.style.filter = `grayscale(${grayscale.value}%)`;
  grayscaleVal.textContent = grayscale.value;
});

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
});

removeBtn.addEventListener('click', () => {
  previewImage.src = '';
  fileInput.value = '';
  uploadBtn.classList.remove('not-visible');
  buttonContainer.classList.remove('.button-container');

});

replaceBtn.addEventListener('click', () => {
  fileInput.click();
});


function imageAdjustments(adjustmentInput, adjustmentInputVal ) {
  if (adjustmentInput === brightness) {
    previewImage.style.filter = `brightness(${adjustmentInput.value}%)`;
    adjustmentInputVal.textContent = adjustmentInput.value;

  } else if (adjustmentInput === contrast) {
    previewImage.style.filter = `contrast(${adjustmentInput.value}%)`;
    adjustmentInputVal.textContent = adjustmentInput.value;

  } else if (adjustmentInput === blur) {
    previewImage.style.filter = `blur(${adjustmentInput.value}px)`;
    adjustmentInputVal.textContent = adjustmentInput.value;

  } else if (adjustmentInput === grayscale) {
    previewImage.style.filter = `grayscale(${adjustmentInput.value}%)`;
    adjustmentInputVal.textContent = adjustmentInput.value;
  }
}