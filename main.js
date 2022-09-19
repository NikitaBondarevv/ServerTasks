const image = document.getElementById('image');

image.addEventListener('load', () => {
  console.log(`Image\nWidth: ${getComputedStyle(image).width},\nHeight: ${getComputedStyle(image).height}`);
});
