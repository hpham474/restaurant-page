function getMenuTitle() {
    const title = document.createElement("div");
    const h1Title = document.createElement("h1");

    h1Title.textContent = "Menu";
    title.classList.add("name");

    title.appendChild(h1Title);

    return title;
}

function getBeverages() {
    const beverages =  document.createElement("div");
    const h2Beverages = document.createElement("h2");
    const beverageOne = document.createElement("div");
    const h3BeverageOne = document.createElement("h3");
    const pBeverageOne = document.createElement("p");
    const beverageTwo = document.createElement("div");
    const h3BeverageTwo = document.createElement("h3");
    const pBeverageTwo = document.createElement("p");

    beverages.classList.add("subsection");
    beverageOne.classList.add("menu-item");
    beverageTwo.classList.add("menu-item");

    h2Beverages.textContent = "Beverages";
    h3BeverageOne.textContent = "Sweet Tea - $3.00";
    pBeverageOne.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;
    h3BeverageTwo.textContent = "Soda - $2.75";
    pBeverageTwo.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;

    beverageOne.appendChild(h3BeverageOne);
    beverageOne.appendChild(pBeverageOne);
    beverageTwo.appendChild(h3BeverageTwo);
    beverageTwo.appendChild(pBeverageTwo);

    beverages.appendChild(h2Beverages);
    beverages.appendChild(beverageOne);
    beverages.appendChild(beverageTwo);

    return beverages;
}

function getSides() {
    const sides =  document.createElement("div");
    const h2Sides = document.createElement("h2");
    const sideOne = document.createElement("div");
    const h3SideOne = document.createElement("h3");
    const pSideOne = document.createElement("p");
    const sideTwo = document.createElement("div");
    const h3SideTwo = document.createElement("h3");
    const pSideTwo = document.createElement("p");

    sides.classList.add("subsection");
    sideOne.classList.add("menu-item");
    sideTwo.classList.add("menu-item");

    h2Sides.textContent = "Sides";
    h3SideOne.textContent = "French Fries - $5.50";
    pSideOne.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;
    h3SideTwo.textContent = "Tater Tots - $6.00";
    pSideTwo.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;

    sideOne.appendChild(h3SideOne);
    sideOne.appendChild(pSideOne);
    sideTwo.appendChild(h3SideTwo);
    sideTwo.appendChild(pSideTwo);

    sides.appendChild(h2Sides);
    sides.appendChild(sideOne);
    sides.appendChild(sideTwo);

    return sides;
}

function getMains() {
    const mains =  document.createElement("div");
    const h2Mains = document.createElement("h2");
    const mainOne = document.createElement("div");
    const h3MainOne = document.createElement("h3");
    const pMainOne = document.createElement("p");
    const mainTwo = document.createElement("div");
    const h3MainTwo = document.createElement("h3");
    const pMainTwo = document.createElement("p");
    const mainThree = document.createElement("div");
    const h3MainThree = document.createElement("h3");
    const pMainThree = document.createElement("p");

    mains.classList.add("subsection");
    mainOne.classList.add("menu-item");
    mainTwo.classList.add("menu-item");
    mainThree.classList.add("menu-item");

    h2Mains.textContent = "Main Items";
    h3MainOne.textContent = "Hamburger - $12.50";
    pMainOne.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;
    h3MainTwo.textContent = "Cheeseburger- $13.00";
    pMainTwo.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;
    h3MainThree.textContent = "Chicken Sandwich - $12.00";
    pMainThree.textContent = 
        `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, quis 
        magnam dolor ab ratione repellendus accusantium suscipit beatae 
        obcaecati delectus!`;

    mainOne.appendChild(h3MainOne);
    mainOne.appendChild(pMainOne);
    mainTwo.appendChild(h3MainTwo);
    mainTwo.appendChild(pMainTwo);
    mainThree.appendChild(h3MainThree);
    mainThree.appendChild(pMainThree);

    mains.appendChild(h2Mains);
    mains.appendChild(mainOne);
    mains.appendChild(mainTwo);
    mains.appendChild(mainThree);

    return mains;
}

export { getMenuTitle, getBeverages, getSides, getMains };