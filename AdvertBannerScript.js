const slideList = document.querySelector('.carousel_slide_container_list');
const slides = Array.from(slideList.children);
const leftButton = document.querySelector('.carousel_button--left');
const rightButton = document.querySelector('.carousel_button--right');
const navButtons = document.querySelector('.carousel_indicator');
const navButtonsArray = Array.from(navButtons.children);

const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index)=>{        //Positions slides next to each other rather than on top of each other
    slide.style.left = slideWidth * index + 'px';
})

const goToSlide = (slideList, currentSlide, targetSlide) => {
    slideList.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

rightButton.addEventListener('click', e => {
    let currentSlide = slideList.querySelector('.current-slide');     //gets current slide being viewed
    const nextSlide = currentSlide.nextElementSibling;                          //gets next slide in the list
    goToSlide(slideList, currentSlide, nextSlide);
})

leftButton.addEventListener('click',e => {
    const currentSlide = slideList.querySelector('.current-slide');     //gets current slide being viewed
    const lastSlide = currentSlide.previousElementSibling;                          //gets next slide in the list
    goToSlide(slideList, currentSlide, lastSlide);
})