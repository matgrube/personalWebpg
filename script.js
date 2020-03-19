const content = document.getElementById('main_section');
console.log(content);
content.style.backgroundColor = "#581d22";

// BUTTONS DECLARATIONS //

const buttonAbout = document.getElementById("button_about");
const buttons = document.querySelectorAll(".nav_button");
const buttonContact = document.getElementById("button_contact");

const buildComponent = (parentComponent, componentMarkup, componentClass) => {
    const elementName = document.createElement(componentMarkup);
    elementName.classList.add(componentClass);
    parentComponent.appendChild(elementName);
    return elementName;
}


const about = () => {
    content.innerHTML = `
        <H1 class="about_name"> Mateusz Grube </H1>
    `;
};

const contact = () => {
    content.innerHTML = `
        <H2 class="contact_title">Contact me!"</H2>
    `;
};

buttonAbout.addEventListener("click", about);
buttonContact.addEventListener("click", contact);