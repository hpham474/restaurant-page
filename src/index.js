const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");
const container = document.getElementById("content");

homeButton.addEventListener("click", () => {
    console.log("home");
});
menuButton.addEventListener("click", () => {
    console.log("menu");
});
contactButton.addEventListener("click", () => {
    console.log("contact");
});