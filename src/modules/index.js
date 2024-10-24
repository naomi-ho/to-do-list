import '../style.css';
import initialLoad from './initial-load';
import { addHomeElement } from './home';
import { addMenuElement } from './menu';
import { addContactElement } from './contact';

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
const content = document.getElementById('content');

initialLoad();

// onclick event of home
homeBtn.addEventListener('click', (e) => {
  // wipes out current contents of div#content
  content.innerHTML = '';
  // runs the correct 'tab module' to populate it with new contents again
  addHomeElement();
});

// onclick event of menu
menuBtn.addEventListener('click', (e) => {
  content.innerHTML = '';
  addMenuElement();
});

// onclick event of contact
contactBtn.addEventListener('click', (e) => {
  content.innerHTML = '';
  addContactElement();
});
