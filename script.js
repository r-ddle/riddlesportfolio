import "animate.css";

function lazyLoad() {
    var lazyImages = document.querySelectorAll('[data-src]');
    lazyImages.forEach(function(image) {
      var imageSource = image.dataset.src;
      image.src = imageSource;
    });
  }
  
  window.addEventListener('scroll', lazyLoad);