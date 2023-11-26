function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter}){
       
    // Slider
    const slider = document.querySelector(container);                    // container   ".reviews-show"
    const slides = document.querySelectorAll(slide);          // slide        ".reviews-show__slide"
    const slideNext = document.querySelector(nextArrow);    // nextArrow     ".reviews-show__slider-next"
    const slidePrev = document.querySelector(prevArrow);    // prevArrow     ".reviews-show__slider-prev"
    const currentNumber = document.querySelector(currentCounter);                  // currentCounter  '#current'
    const totalNumber = document.querySelector(totalCounter);                      // totalCounter    '#total'
    const slidesWrapper = document.querySelector('.reviews-show__slider-wrapper');
    const slidesField = document.querySelector('.reviews-show__slider-inner');
    //   const width = window.getComputedStyle(slidesWrapper).width;
   

    const dots = document.createElement("ol");
    const dotsArr = [];
    
    dots.classList.add('slider-indicators');
    

    slider.style.position = 'relative';
    slider.append(dots);

    let sliderIndex = slides.length;
    let currentIndex = 0;

    if (slides.length < 10) {
        totalNumber.textContent = `0${sliderIndex}`;
    } else {
        totalNumber.textContent = slides.length;
    }

    function changeClass (){
        dotsArr.forEach(dot => dot.style.opacity = '.5');
        dotsArr[currentIndex].style.opacity = 1;
    
    }
 

    function hideSlides(){
        slides.forEach(item => {
        item.classList.add('hide');
        });   
    };

    function showSlide(i = 0) {                    // значение по умолчанию
        slides[i].classList.add('show', 'fade');
        slides[i].classList.remove('hide');   
        currentNumber.textContent = i + 1; 
        if (i < 9) {
        currentNumber.textContent =  `0${i + 1}`;       
        }
    };

    hideSlides();
    showSlide();

    slideNext.addEventListener('click', () => {
        

        hideSlides();
        currentIndex += 1;
        
        if (currentIndex > sliderIndex - 1 ){
            currentIndex = 0;       
            console.log(currentIndex);
        } 
        showSlide(currentIndex);
        changeClass();
    });

    slidePrev.addEventListener('click', () => {
    
        hideSlides();
        if (currentIndex < 1){
            currentIndex = sliderIndex;  
            console.log(currentIndex);          
        } 
        
        currentIndex = currentIndex - 1;     

        showSlide(currentIndex);         
        changeClass();    
    });

  
    for (let i = 0; i < slides.length; i++){
        const dot = document.createElement("li");
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot'); 
        if (i == 0){
        dot.classList.add('dot-active');
        }
        dots.append(dot);
        dotsArr.push(dot);
    }

    dotsArr.forEach(dot => {
    
        dot.addEventListener('click', (e) => {
        hideSlides();
        const slideTo = e.target.getAttribute('data-slide-to');
        console.log(slideTo);
        console.log('p');
        console.log(currentIndex);

        currentIndex = slideTo - 1;
        console.log(currentIndex);

        changeClass();
        showSlide(currentIndex);     
        })
    });

}

export default slider;