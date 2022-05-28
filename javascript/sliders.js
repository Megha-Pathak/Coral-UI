const sliderInputs = document.querySelectorAll('.slider-input input');
const sliderRanges = document.querySelectorAll('.slider-range input');
const progressBar = document.querySelector('.slider-range .progress');

let priceGap = 1000;

sliderInputs.forEach(input => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(sliderInputs[0].value);
    let maxVal = parseInt(sliderInputs[1].value);

    if ((maxVal - minVal >= priceGap) && maxVal <= 10000) {
      if (e.target.id === 'input-min') {
        sliderRanges[0].value = minVal;
        progressBar.style.left = (minVal / sliderRanges[0].max) * 100 + "%";
      } else {
        sliderRanges[1].value = maxVal;
        progressBar.style.right = 100 - (maxVal / sliderRanges[1].max) * 100 + "%";
      }
    }
  });
});

sliderRanges.forEach(input => {
  input.addEventListener('input', (e) => {
    let minVal = parseInt(sliderRanges[0].value);
    let maxVal = parseInt(sliderRanges[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === 'range-min') {
        sliderRanges[0].value = maxVal - priceGap;
      } else {
        sliderRanges[1].value = minVal + priceGap;
      }
    } else {
      sliderInputs[0].value = minVal;
      sliderInputs[1].value = maxVal;
      progressBar.style.left = (minVal / sliderRanges[0].max) * 100 + "%";
      progressBar.style.right = 100 - (maxVal / sliderRanges[1].max) * 100 + "%";
    }
  });
});