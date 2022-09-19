const image = document.getElementById('image');
const computedStyleImage = getComputedStyle(image);

image.addEventListener('load', () => {
  console.log(`Image\nWidth: ${computedStyleImage.width},\nHeight: ${computedStyleImage.height}`);
});
