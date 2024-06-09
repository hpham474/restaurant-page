import { getTitle, getAbout, getHours, getLocation } from './pages/home';
import './style.css';

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const container = document.getElementById("content");


homeButton.addEventListener("click", () => {
    container.innerHTML = '';

    container.appendChild(getTitle());
    container.appendChild(getAbout());
    container.appendChild(getHours());
    container.appendChild(getLocation());
});
menuButton.addEventListener("click", () => {
    console.log("menu");
});
contactButton.addEventListener("click", () => {
    console.log("contact");
});

// default page
container.appendChild(getTitle());
container.appendChild(getAbout());
container.appendChild(getHours());
container.appendChild(getLocation());