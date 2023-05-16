let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

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

