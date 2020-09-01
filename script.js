const buttonAbout = document.getElementById("button_about");
const buttonPortfolio = document.getElementById("button_portfolio");
const buttonContact = document.getElementById("button_contact");
const buttonTechnologies = document.getElementById("button_technologies");

const aboutPage = document.querySelector('.about');
const portfolioPage = document.querySelector('.portfolio');
const contactPage = document.querySelector('.contact');
const technologiesPage = document.querySelector('.technologies');
const navPage = document.querySelector('.arrow-navigation');

const upArrow = () => {
    aboutPage.classList.add('visible');
    navPage.classList.add('invisible');
}

const leftArrow = () => {
    portfolioPage.classList.add('visible');
    navPage.classList.add('invisible');
}

const downArrow = () => {
    contactPage.classList.add('visible');
    navPage.classList.add('invisible');
}

const rightArrow = () => {
    technologiesPage.classList.add('visible');
    navPage.classList.add('invisible');
}

buttonAbout.addEventListener("click", upArrow);
buttonPortfolio.addEventListener("click", leftArrow);
buttonContact.addEventListener("click", downArrow);
buttonTechnologies.addEventListener("click", rightArrow);

(function typeWriting() {
    const endings = ['JavaScript Developer', 'Computer Science Student', 'Technology enthusiast'];
    let count = 0;
    let index = 0;
    let currentEnding = '';
    let letter = '';
    let endingEnded = false;

    (function type() {
        if(count === endings.length) {
            count = 0;
        }
        currentEnding = endings[count];
        letter = currentEnding.slice(0, ++index);
        document.querySelector('.h3-typing').textContent = letter;
        if(letter.length === currentEnding.length) {
            endingEnded = true;
            setTimeout(() => {
                while (endingEnded) {
                    letter = letter.slice(letter.length - 2, letter.length - 1);
                    document.querySelector('.h3-typing').textContent = letter;
                    index--;
                    if(index === 0) {
                        endingEnded = false;
                        count++;
                    }
                }
            } , 3000)
        }
        setTimeout(type, 300);
    }());
}());



const arrowKeys = () => {
    document.onkeydown = (e) => {
        e = e || window.event;
        switch (e.keyCode) {
            case 37:
                leftArrow();
                break;
            case 39:
                rightArrow();
                break;
            case 38:
                upArrow();
                break;
            case 40:
                downArrow();
                break;
        }
    }
}
arrowKeys();