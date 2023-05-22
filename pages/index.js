// quote's slider

const sliderQuote = document.querySelector('.quote__slider');
const sliderQuotes = document.querySelectorAll('.quote__content');
const lineQuotes = document.querySelector('.quote__slides');
const buttonNextQuote = document.querySelector('.quote__btn_type_next');
const buttonBackQuote = document.querySelector('.quote__btn_type_back');
let countQuotes = 0;
let sliderWidthQuote = sliderQuote.offsetWidth;

const nextQuote = () => {
    countQuotes++;
    if (countQuotes >= sliderQuotes.length) {
        countQuotes = 0;
    }
    rollQuotes();
}

const backQuote = () => {
    countQuotes--;
    if (countQuotes < 0) {
        countQuotes = sliderQuotes.length - 1;
    }
    rollQuotes();
}

const rollQuotes = () => {
    lineQuotes.style.transform = `translateX(${-countQuotes * sliderWidthQuote}px)`;
}

buttonNextQuote.addEventListener('click', nextQuote);
buttonBackQuote.addEventListener('click', backQuote);

// instagram slider (mobile version)

const sliderInst = document.querySelector('.inst__slider');
const sliderImages = document.querySelectorAll('.inst__element_type_slide');
const sliderLine = document.querySelector('.inst__slides');
const buttonNextImage = document.querySelector('.inst__btn_type_next');
const buttonBackImage = document.querySelector('.inst__btn_type_back');
let countImage = 0;
let sliderWidthInst = sliderInst.offsetWidth;

const nextImage = () => {
    countImage++;
    if (countImage >= sliderImages.length) {
        countImage = 0;
    }
    rollImages();
}

const backImage = () => {
    countImage--;
    if (countImage < 0) {
        countImage = sliderImages.length - 1;
    }
    rollImages();
}

const rollImages = () => {
    sliderLine.style.transform = `translateX(${-countImage * sliderWidthInst}px)`
}

setInterval(() => {
    nextImage()
}, 2500)

buttonNextImage.addEventListener('click', nextImage);
buttonBackImage.addEventListener('click', backImage);

// выпадающее меню

const containers = document.querySelectorAll('.footer__column');
containers.forEach((container) => {
    const dropContainer = container.querySelector('.footer__column-content');
    const dropButton = container.querySelector('.footer__column-heading');
    function drop(){
        dropContainer.classList.toggle("footer__column-content_type_show");
    }
    dropButton.addEventListener('click', drop)
})