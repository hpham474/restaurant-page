import { getHomeTitle, getAbout, getHours, getLocation } from './pages/home';
import { getMenuTitle, getBeverages, getSides, getMains } from './pages/menu';
import { getContactTitle, getHeadChef, getOwner, getManager } from './pages/contact';
import './style.css';

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const container = document.getElementById("content");


homeButton.addEventListener("click", () => {
    container.innerHTML = '';

    container.appendChild(getHomeTitle());
    container.appendChild(getAbout());
    container.appendChild(getHours());
    container.appendChild(getLocation());
});
menuButton.addEventListener("click", () => {
    container.innerHTML = '';

    container.appendChild(getMenuTitle());
    container.appendChild(getBeverages());
    container.appendChild(getSides());
    container.appendChild(getMains());
});
contactButton.addEventListener("click", () => {
    container.innerHTML = '';

    container.appendChild(getContactTitle());
    container.appendChild(getHeadChef());
    container.appendChild(getOwner());
    container.appendChild(getManager());
});

// default page
container.appendChild(getHomeTitle());
container.appendChild(getAbout());
container.appendChild(getHours());
container.appendChild(getLocation());