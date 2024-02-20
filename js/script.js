// ----------------------------------------------------------------------------------------------------------- navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// ----------------------------------------------------------------------------------------------------------- counter
const counters = document.querySelectorAll('.counter');


for (let n of counters) {
    const updateCount = () => {
        const target = +n.getAttribute('data-target');
        const count = +n.innerText;
        const divider = 5000;
        const speed = 100; // 1000 millisecond => 1 second;

        const inc = target / divider;

        if (count < target) {
            n.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, speed);
        } else {
            n.innerText = target;
        }
    };

    updateCount();
}

// ----------------------------------------------------------------------------------------------------------- card height
// Pridobitev vseh kartic z razredom .card
var cards = document.getElementsByClassName('card');

var totalHeight = 0;

// Seštevanje višin vseh kartic
for (var i = 0; i < cards.length; i++) {
    totalHeight += cards[i].offsetHeight;
}

// Zdaj, ko imate skupno višino, lahko to vrednost uporabite
// na primer za dinamično nastavitev spodnjega roba nekega drugega elementa
// ali pa jo preprosto izpišete v konzolo za preverjanje
document.documentElement.style.setProperty('--cards-total-height', `${totalHeight}px`);
console.log('Skupna višina vseh kartic: ', totalHeight + 'px');

