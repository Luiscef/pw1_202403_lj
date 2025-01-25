document.addEventListener('DOMContentLoaded', function() {
  let currentIndex = 0; 
  const images = document.querySelectorAll('.imagen');  
  const totalImages = images.length; 

 
  function updateCarousel() {
      const newTransformValue = `translateX(-${currentIndex * 100}%)`;
      document.querySelector('.carrusel').style.transform = newTransformValue; 
  }

  document.getElementById('nextBtn').addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % totalImages; 
      updateCarousel();  
  });


  document.getElementById('prevBtn').addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages; 
      updateCarousel();  
  });

  
});