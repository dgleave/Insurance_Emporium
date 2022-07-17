const slideList = document.querySelector('.carousel_slide_container_list');
const slides = Array.from(slideList.children);
const leftButton = document.querySelector('.carousel_button--left');
const rightButton = document.querySelector('.carousel_button--right');
const navButtons = document.querySelector('.carousel_indicator');
const navButtonsArray = Array.from(navButtons.children);
const slideWidth = slides[0].getBoundingClientRect().width;
const showAllButton = document.querySelector('.show_all_button');
const showAllSlides = document.querySelector('.gridContainer');
const gridSlidesArray = Array.from(showAllSlides.children);


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

    const currentButton = navButtons.querySelector('.current-slide');
    const clickedButton = currentButton.nextElementSibling;
    updateButtons(currentButton, clickedButton);
})

leftButton.addEventListener('click',e => {
    const currentSlide = slideList.querySelector('.current-slide');     //gets current slide being viewed
    const lastSlide = currentSlide.previousElementSibling;                          //gets next slide in the list
    goToSlide(slideList, currentSlide, lastSlide);

    const currentButton = navButtons.querySelector('.current-slide');
    const clickedButton = currentButton.previousElementSibling;
    updateButtons(currentButton, clickedButton);
})

navButtons.addEventListener('click', e =>{
    const clickedButton = e.target.closest('button');
    if(!clickedButton) return;

    const currentSlide = slideList.querySelector('.current-slide');
    const currentButton = navButtons.querySelector('.current-slide');
    const targetButtonIndex = navButtonsArray.findIndex(btn => btn === clickedButton);
    const targetSlide = slides[targetButtonIndex];
    console.log('My Target: ',targetSlide);

    goToSlide(slideList, currentSlide, targetSlide);
    updateButtons(currentButton, clickedButton);
})

const updateButtons = (currentButton, clickedButton) => {
    console.log('clicked button ',clickedButton);
    currentButton.classList.remove('current-slide');
    clickedButton.classList.add('current-slide');
}

showAllButton.addEventListener('click', e =>{
    if(showAllSlides.style.visibility === "visible"){
        showAllSlides.style.visibility = "hidden";
    } else{
        showAllSlides.style.visibility = "visible";
    }
})

showAllSlides.addEventListener('click', e =>{
    const clickedGrid = e.target.id;
    console.log(clickedGrid);
    const currentSlide = slideList.querySelector('.current-slide');
    const targetButtonIndex = slides[clickedGrid];
    goToSlide(slideList, currentSlide, targetButtonIndex);
    const currentButton = navButtons.querySelector('.current-slide');
    const clickedButton = navButtonsArray[clickedGrid];
    updateButtons(currentButton, clickedButton);
    showAllSlides.style.visibility = "hidden";
})