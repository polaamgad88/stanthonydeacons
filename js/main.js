// gallery section 
const images = [
    'imgs/11.jpg',
    'imgs/15.jpg',
    'imgs/13.jpg',
    'imgs/4.jpg',
    'imgs/5.jpg',
    'imgs/6.jpg',
    'imgs/7.jpg',
    'imgs/11.jpg',
    'imgs/5.jpg',
    'imgs/12.jpg',
    // Add more image URLs as needed
  ];

const gallery = document.getElementById('gallery');

images.forEach((src, index) => {
  const col = document.createElement('div');
  col.className = 'col-6 col-md-4 col-lg-3 mb-4';
  
  const img = document.createElement('img');
  img.src = src;
  img.className = 'img-fluid';
  img.alt = `Gallery Image ${index + 1}`;
  
  col.appendChild(img);
  gallery.appendChild(col);
});
// end of gallery section