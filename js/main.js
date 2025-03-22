function openYouTube() {
  window.open("https://www.youtube.com/watch?v=UuXkLUjZxJM&list=PLjKIw0q3X5rhTyx_y7Hd41wONnEP4DuAm&index=4", "_blank", "width=800,height=600");
} 
// end of youtube section



document.addEventListener("DOMContentLoaded", function() {
  const image = document.querySelector(".image-scroll");

  function handleScroll() {
    const imagePosition = image.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (imagePosition < screenHeight - 100) {
      image.classList.add("show");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger on page load
});

  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle(); // Close the navbar
      }
    });
  });

  document.addEventListener('click', function (event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show') && event.target.tagName === 'A') {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });


