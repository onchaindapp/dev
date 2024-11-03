
document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.form-header');
  const sliders = document.querySelectorAll('.form-slider');

  // Initially show the first form and mark the first header as 'active'
  if (headers.length > 0) {
    headers[0].classList.add('active'); // Make the first header active
  }

  if (sliders.length > 0) {
    sliders[0].classList.add('active'); // Show the first slider by default
  }

  headers.forEach(header => {
    header.addEventListener('click', function () {
      // Remove 'active' class from all headers
      headers.forEach(h => h.classList.remove('active'));

      // Add 'active' class to the clicked header
      this.classList.add('active');

      // Switch sliders based on the header clicked
      const targetId = header.getAttribute('data-target');
      sliders.forEach(slider => {
        if (slider.id === targetId) {
          slider.classList.add('active');
        } else {
          slider.classList.remove('active');
        }
      });
    });
  });
});


