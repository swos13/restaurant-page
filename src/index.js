import './style.css';
import homeDisplayController from './home.js';
import menuDisplayController from './menu.js';
import aboutDisplayController from './about.js';
import contactDisplayController from './contact.js';

function clearContainer(container) {
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');
const contactButton = document.querySelector('.contact-button');

const content = document.querySelector('#content');
homeDisplayController.displayContent(content);

homeButton.addEventListener('click', () => {
    clearContainer(content);
    homeDisplayController.displayContent(content);
});

menuButton.addEventListener('click', () => {
    clearContainer(content);
    menuDisplayController.displayContent(content);
});

aboutButton.addEventListener('click', () => {
    clearContainer(content);
    aboutDisplayController.displayContent(content);
});

contactButton.addEventListener('click', () => {
    clearContainer(content);
    contactDisplayController.displayContent(content);
});