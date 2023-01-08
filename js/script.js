// Mobile menu

const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const mobileMenu = document.querySelector('.hero__mobile-menu');

menu.addEventListener('click', ()=> {
    mobileMenu.classList.remove('hidden');
})

closeMenu.addEventListener('click', ()=> {
    mobileMenu.classList.add('hidden');
})
// Fim mobile menu

// Slider

let count = 1;

setInterval(function nextImage() {
    let width = window.screen.width;
    count++;
    let radio = document.getElementById("radio"+count)

    if(width > "720" && width < "1080") {
        if(count > 2) {
            count = 0
        }
    }
    else if(width > "1080") {
        if(count > 1) {
            count = 0
        }
    }

    else {
        if(count > 5) {
            count = 0
        }
    }

    radio.checked = true;
}, 3000)

// Fim slider
