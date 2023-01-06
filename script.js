// list
const button = document.getElementById('button');

const list = document.getElementById('list');

button.addEventListener('click', function() {
  button.classList.toggle('click')
})

button.addEventListener('click', function() {
  list.classList.toggle('list')
})


// dark & bright switch
const btn = document.getElementById('btn');

const welcome = document.getElementById('welcoming');

const social = document.getElementById('social-media');

const navbar = document.getElementById('nav');

const footer = document.getElementById('footer');

const text = document.getElementById('text');

const submit = document.getElementById('submit');

const name = document.getElementById('name');

const email = document.getElementById('email');

const tarea = document.getElementById('message');

btn.addEventListener('click', function() {
  document.body.classList.toggle('switch');
});

btn.addEventListener('click', function() {
  welcome.classList.toggle('welcome');
});

btn.addEventListener('click', function() {
  social.classList.toggle('sosmed');
});

btn.addEventListener('click', function () {
  navbar.classList.toggle('navigation')
});

btn.addEventListener('click', function() {
  footer.classList.toggle('color')
});

btn.addEventListener('click', function() {
  text.classList.toggle('chcolor')
});

btn.addEventListener('click', function() {
  submit.classList.toggle('button')
});

btn.addEventListener('click', function() {
  name.classList.toggle('tcolor')
});

btn.addEventListener('click', function() {
  email.classList.toggle('tcolor')
});

btn.addEventListener('click', function() {
  tarea.classList.toggle('tcolor')
});