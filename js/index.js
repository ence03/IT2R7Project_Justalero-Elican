// slider function
const slider = document.querySelector('.slider');
let slideIndex = 0;

function slideNext() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  slide();
}

function slide() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(slideNext, 2000); 

//image preview function

function showPreview(imageUrl) {
  var previewContainer = document.getElementById('previewContainer');
  var previewImage = document.getElementById('previewImage');
  
  previewImage.src = imageUrl;

  previewContainer.style.display = 'block';
}

function closePreview() {
  var previewContainer = document.getElementById('previewContainer');
  previewContainer.style.display = 'none';
}

window.onclick = function(event) {
  var previewContainer = document.getElementById('previewContainer');
  if (event.target === previewContainer) {
    previewContainer.style.display = 'none';
  }
};

//navbar menu function

let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//form function

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  const formData = { firstName, lastName, email, subject, message };
  console.log(formData);

  alert('Form submitted successfully!');

  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
});







