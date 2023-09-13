// About Page

const plusDiv = document.querySelectorAll('.plus');
const backLot = document.querySelectorAll('.back');

plusDiv.forEach((plus, index) => {
    plus.addEventListener('click', () => {
        plus.classList.toggle('is-active');
        backLot[index].classList.toggle('back-active');
    });
});


// Hamburger Button

const menuBtn = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
})

// Contact Page

const inputSelection = document.querySelectorAll('.input');
const submitBtn = document.querySelector('#submit-button');
const inputRequired = document.querySelectorAll('.required');

submitBtn.addEventListener('click', () => {
    inputSelection.forEach((input, index) => {
        if (input.value === '') {
            input.classList.add('incorrect');
            console.log('clicked')
        } else {
            input.classList.remove('incorrect');
        };

        if (input.value === '' && inputRequired[index]) {
            inputRequired[index].classList.add('flag');
        } else {
            inputRequired[index].classList.remove('flag');
        }
    })
})

