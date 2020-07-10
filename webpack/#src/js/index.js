import './../css/style.css';

const body = document.querySelector('body');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Header text';

body.append(title);