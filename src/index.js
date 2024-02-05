import './style.css';
import homeDisplayController from './home.js';
import menuDisplayController from './menu.js';
import aboutDisplayController from './about.js';
import contactDisplayController from './contact.js';

const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const aboutButton = document.querySelector('.about-button');
const contactButton = document.querySelector('.contact-button');

const content = document.querySelector('#content');
homeDisplayController.displayContent(content);