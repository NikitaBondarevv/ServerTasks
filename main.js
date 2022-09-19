const computedStyleImage = getComputedStyle(document.getElementById('image'));

image.addEventListener('load', () => {
  console.log(`Image\nWidth: ${image.width},\nHeight: ${image.height}`);
});
