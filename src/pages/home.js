function getHomeTitle() {
    const title = document.createElement("div");
    const h1Title = document.createElement("h1");

    h1Title.textContent = "A Very Awesome Restaurant";
    title.classList.add("name");

    title.appendChild(h1Title);

    return title;
}

function getAbout() {
    const about = document.createElement("div");
    const h2About = document.createElement("h2");
    const pAbout = document.createElement("p");

    h2About.textContent = "About";
    pAbout.textContent =
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus 
        modi eius delectus dolorem quaerat, tenetur ipsam aspernatur laborum 
        suscipit rerum quae doloremque amet corrupti totam facilis molestias 
        natus, possimus qui quasi unde necessitatibus autem consectetur 
        maiores esse. Corrupti sint ad aperiam. Vel, accusamus voluptates esse 
        nostrum architecto ea nisi officia.`;

    about.classList.add("subsection");
    
    about.appendChild(h2About);
    about.appendChild(pAbout);

    return about;
}

function getHours() {
    const hours = document.createElement("div");
    const h2Hours = document.createElement("h2");
    const pHours = document.createElement("p");

    h2Hours.textContent = "Hours";
    pHours.innerHTML = 
        `Sunday: 8:00am - 10:00pm<br>
        Monday: 8:00am - 8:00pm<br>
        Tuesday: 8:00am - 8:00pm<br>
        Wednesday: 8:00am - 8:00pm<br>
        Thursday: 8:00am - 8:00pm<br>
        Friday: 8:00am - 10:00pm<br>
        Saturday: 8:00am - 10:00pm`;

    hours.classList.add("subsection");

    hours.appendChild(h2Hours);
    hours.appendChild(pHours);

    return hours;
}

function getLocation() {
    const location = document.createElement("div");
    const h2Location= document.createElement("h2");
    const pLocation = document.createElement("p");

    h2Location.textContent = "Location";
    pLocation.textContent = "1234 Locate Drive, Locationville, Location";

    location.classList.add("subsection");
    
    location.appendChild(h2Location);
    location.appendChild(pLocation);

    return location;
}

function getImageCredits() {
    const imageCredits = document.createElement("div");
    const pImageCredits = document.createElement("p");

    imageCredits.classList.add("subsection");
    imageCredits.classList.add("credits");

    pImageCredits.innerHTML = `<a href="https://www.freepik.com/free-photo/abstract-blur-restaurant-coffee-shop-cafe_1135843.htm#query=restaurant%20blur&position=15&from_view=keyword&track=ais_user&uuid=83e5dae8-7f7f-4e91-8f86-42e6ebe0a29f">Image by mrsiraphol</a> on Freepik`;

    imageCredits.appendChild(pImageCredits);

    return imageCredits;
}

export { getHomeTitle, getAbout, getHours, getLocation, getImageCredits };