const slider = document.querySelector('.inst__slider');
const sliderImages = document.querySelectorAll('.inst__element_type_slide');
const sliderLine = document.querySelector('.inst__slides');

const buttonNext = document.querySelector('.inst__btn_type_next');
const buttonBack = document.querySelector('.inst__btn_type_back');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

function nextSlide() {
    sliderCount++;

    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }

    rollSlider();
}

function backSlide() {
    sliderCount--;

    if (sliderCount < 0) {
        sliderCount = sliderImages.length - 1;
    }

    rollSlider();
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

setInterval(() => {
    nextSlide()
}, 2000)

buttonNext.addEventListener('click', nextSlide);
buttonBack.addEventListener('click', backSlide);

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