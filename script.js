const buttonAbout = document.getElementById("button_about");
const buttonPortfolio = document.getElementById("button_portfolio");
const buttonContact = document.getElementById("button_contact");
const buttonTechnologies = document.getElementById("button_technologies");

const aboutPage = document.querySelector('.about');
const navPage = document.querySelector('.arrow-navigation');


buttonAbout.addEventListener("click", () => {
    aboutPage.classList.add('visible');
    navPage.classList.add('invisible');
    console.log(aboutPage);
    console.log(navPage);
});