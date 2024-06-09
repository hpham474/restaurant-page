function getContactTitle() {
    const title = document.createElement("div");
    const h1Title = document.createElement("h1");

    h1Title.textContent = "Contact Us";
    title.classList.add("name");

    title.appendChild(h1Title);

    return title;
}

function getHeadChef() {
    const headChef =  document.createElement("div");
    const h2HeadChef = document.createElement("h2");
    const contact = document.createElement("div");
    const pContactTitle = document.createElement("p");
    const pContactNumber = document.createElement("p");
    const pContactEmail = document.createElement("p");

    headChef.classList.add("subsection");
    contact.classList.add("contact");

    h2HeadChef.textContent = "James Michael"
    pContactTitle.textContent = "Head Chef";
    pContactNumber.textContent = "012-345-6789";
    pContactEmail.textContent = "ChefJamesMichael@email.com"

    contact.appendChild(pContactTitle);
    contact.appendChild(pContactNumber);
    contact.appendChild(pContactEmail);

    headChef.appendChild(h2HeadChef);
    headChef.appendChild(contact);

    return headChef;
}

function getOwner() {
    const owner =  document.createElement("div");
    const h2Owner = document.createElement("h2");
    const contact = document.createElement("div");
    const pContactTitle = document.createElement("p");
    const pContactNumber = document.createElement("p");
    const pContactEmail = document.createElement("p");

    owner.classList.add("subsection");
    contact.classList.add("contact");

    h2Owner.textContent = "Robert John"
    pContactTitle.textContent = "Owner";
    pContactNumber.textContent = "123-456-7890";
    pContactEmail.textContent = "OwnerRobertJohn@email.com"

    contact.appendChild(pContactTitle);
    contact.appendChild(pContactNumber);
    contact.appendChild(pContactEmail);

    owner.appendChild(h2Owner);
    owner.appendChild(contact);

    return owner;
}

function getManager() {
    const manager =  document.createElement("div");
    const h2Manager = document.createElement("h2");
    const contact = document.createElement("div");
    const pContactTitle = document.createElement("p");
    const pContactNumber = document.createElement("p");
    const pContactEmail = document.createElement("p");

    manager.classList.add("subsection");
    contact.classList.add("contact");

    h2Manager.textContent = "Mary Patricia"
    pContactTitle.textContent = "Manager";
    pContactNumber.textContent = "234-567-8901";
    pContactEmail.textContent = "ManagerMaryPatricia@email.com"

    contact.appendChild(pContactTitle);
    contact.appendChild(pContactNumber);
    contact.appendChild(pContactEmail);

    manager.appendChild(h2Manager);
    manager.appendChild(contact);

    return manager;
}

export { getContactTitle, getHeadChef, getOwner, getManager };