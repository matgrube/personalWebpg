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