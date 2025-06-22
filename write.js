function filterGallery(category) {
  const images = document.querySelectorAll('.gallery .image');

  images.forEach(image => {
    if (category === 'all' || image.classList.contains(category)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}