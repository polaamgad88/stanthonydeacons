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

// elly doula katboh bas gam3toh hena 3lshan el denya tb2a monazma
//first script for google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-359NQSD1N9');

// end of google analytics section

// Navigation bar section
// const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header =document.querySelector('.header.container');

// hamburger.addEventListener('click',()=>{
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll' , () => {
//     var scroll_position = window.scrollY;
//     if(scroll_position > 250){
//         header.style.backgroundColor = '#29323c';
//     }else{
//         header.style.backgroundColor = 'transparent';
//     }
// });
// menu_item.forEach((item) => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('active');
//             mobile_menu.classList.toggle('active');
//         });

//     });
// end of navigation bar section

// NEW NAVIGATION BAR SECTION
document.addEventListener("scroll", function() {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 250) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});
// end of new navigation bar section