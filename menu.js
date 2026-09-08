// Select the navbar element
const navbar = document.getElementById('navbar');

// Listen for window scroll event
window.addEventListener('scroll', () => {
  // Check if scroll position is greater than 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});