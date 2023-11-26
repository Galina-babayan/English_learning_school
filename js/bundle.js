/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/advantages.js":
/*!**********************************!*\
  !*** ./js/modules/advantages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");


function advantages(){
  // вариант без использования классов, просто создаем на лету:
    // Advantages:

 

    (0,_servises_servises__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/advantages')
           .then(data => createAdvantageCard(data));

    
    // axios.get('http://localhost:3000/advantages')
    //     .then(data => {
    //         console.log(data.data);
    //         createAdvantageCard(data.data)
    //     });

    function createAdvantageCard(data){
        data.forEach(({img, title, text}) => {
            const element = document.createElement('div');
            
            element.classList.add('advantages__card');

            element.innerHTML = `
                <img src=${img}/>
                <h4>${title}</h4>
                <h5>
                    ${text}
                </h5>
      
        `;

        document.querySelector('.advantages__block').append(element);
        });
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advantages);

/***/ }),

/***/ "./js/modules/courses.js":
/*!*******************************!*\
  !*** ./js/modules/courses.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");


function courses (){

        // используем классы для карточек
    // Courses:

    class coursesCard {
        constructor(src, titleName, titleAge, text, time, map, parentSelector, ...classes){
            this.src = src;
            this.titleName = titleName;
            this.titleAge = titleAge;
            this.text = text;
            this.time = time;
            this.map = map;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;

        }

        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0) {
                this.element = 'courses__column';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); 
            }
            
            element.innerHTML = `
                <div class="courses__img">
                    <img
                        class="courses__image"
                        src=${this.src}
                        alt="course-description"
                        />
                    </div>
                <div class="courses__description">
                    <div class="courses__title">
                        <h3>${this.titleName}</h3>
                        <h4>${this.titleAge}</h4>
                    </div>
                    <div class="courses__subtitle">
                        <p>
                            ${this.text}
                        </p>
                    </div>
                    <div class="courses__time">
                        <div class="courses__time-flex">
                            <img
                            class="courses__time-image"
                            src="./assets/images/imagesMain/m_time.png"
                            alt="course-description"
                            />
                            <p>${this.time}</p>
                        </div>
                        <div class="courses__place">
                            <img
                            src="./assets/images/imagesMain/m_map.png"
                            alt="course-description"
                            />
                            <p>
                            ${this.map}
                            </p>
                        </div>
                    </div>
                    <div class="request__button btn d-flex justify-content-end">
                        <button data-modal class="button">Подробнее</button>              
                    </div>
                </div>
          
            `;

        this.parent.append(element);
        }
    }

    (0,_servises_servises__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/courses')
        .then(data => {
            data.forEach(({img, titleName, titleAge, text, time, map}) => {
                new coursesCard(img, titleName, titleAge, text, time, map, '.courses__row', 'courses__column').render();
            })
        });

    // axios.get('http://localhost:3000/courses')
    //     .then(data => {
    //         data.data.forEach(({img, titleName, titleAge, text, time, map}) => {
    //             new coursesCard(img, titleName, titleAge, text, time, map, '.courses__row', 'courses__column').render();
    //         })
    //     });

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (courses);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");



function form (formSelector, modalTimerId){
      // Form

      const form = document.querySelector(formSelector);
      const name = document.querySelector('#name');
      const phone = document.querySelector('#phone');
  
      const message = {
          loading: 'assets/images/imagesMain/spinner.svg',
          success: 'Спасибо! Скоро мы свяжемся с вами',
          failure: 'Что-то пошло не так...'
        };
  
  
      function bindPostData(){
          form.addEventListener('submit', (e) => {
              e.preventDefault();
  
              const statusMessage = document.createElement('img');
              statusMessage.src = message.loading;
              statusMessage.style.cssText = `
                 display: block;
                 margin: 0 auto;
              `;
                     
              form.insertAdjacentElement('afterend', statusMessage);           
  
              const formData = new FormData(form);            
  
              const json = JSON.stringify(Object.fromEntries(formData.entries()));        
  
              console.log(name.value);
  
              if(checkName(name) && checkNumber(phone)){
                  (0,_servises_servises__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
                  .then(data => {
                   console.log(data);
                   showThanksModal(message.success);            
                   statusMessage.remove();
                  })
                  .catch(() => {
                   showThanksModal(message.failure);
                  })
                  .finally(() => {
                   form.reset();
                  }); 
              }
          })
      };
  
      bindPostData(form);
  
      function showThanksModal (message){
          const prevModal = document.querySelector('.consult__dialog');
          prevModal.classList.add('hide');
  
          (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('#popup', modalTimerId);
  
          const thanksModal = document.createElement('div');
          thanksModal.classList.add('consult__dialog');
          thanksModal.innerHTML = `
              <div class="consult__content">
                   <div class="consult__content-thanks">
                       <div class="consult-thanks">${message}</div>                                         
                   </div>
              </div>
          `;
  
          document.querySelector('#popup').append(thanksModal);
          setTimeout(() => {
              thanksModal.remove();
              prevModal.classList.add('show', 'fade');
              prevModal.classList.remove('hide');
              (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('#popup');
          },4000);
      }
  
      
      function checkNumber(number){ 
          const numberWarning = document.querySelector('.consult__number')
  
          const numberFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
          if(number.value.match(numberFormat)){
              return true;
          }
          else {
              let element = document.createElement('p')
              element.classList.add('red')
              element.textContent = "Введите корректный номер телефона"
              numberWarning.append(element);
                  phone.focus();
                  setTimeout(() => {
                      numberWarning.removeChild(element);                        
                  }, 3000)
              return false;
          }
  
      }
     
      function checkName(name){ 
          const nameWarning = document.querySelector('.consult__name');  
          
          const lettersFormat = /^[А-яЁёA-aZ-z]/;
          if(name.value.match(lettersFormat)){
              return true;
          }
          else {
              const element = document.createElement('p')
              element.classList.add('red')
              element.textContent = "Имя должно содержать только  буквы!"
              nameWarning.append(element);
              name.focus();
              setTimeout(() => {
                  nameWarning.removeChild(element);                        
              }, 3000)
              return false;
          }
      }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/header.js":
/*!******************************!*\
  !*** ./js/modules/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header (){
      //---меню бургер----------------------------

      const iconMenu = document.querySelector(".header__burger");
      const menuBody = document.querySelector(".header__menu");
  
      if (iconMenu) {
        iconMenu.addEventListener("click", function () {
          document.body.classList.toggle("lock");
          iconMenu.classList.toggle("active");
          menuBody.classList.toggle("active");
        });
      }
  
  
    //---прокрутка при клике--------------------
  
      const menuLinks = document.querySelectorAll(".header__link[data-goto]");
  
      if (menuLinks.length > 0) {
        menuLinks.forEach((menuLink) => {
          menuLink.addEventListener("click", onMenuLinkClick);
        });
  
        function onMenuLinkClick(event) {
          const menuLink = event.target;
          if (
            menuLink.dataset.goto &&
            document.querySelector(menuLink.dataset.goto)
          ) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =
              gotoBlock.getBoundingClientRect().top +
              scrollY -
              document.querySelector("header").offsetHeight;
  
            if (iconMenu.classList.contains("active")) {
              document.body.classList.remove("lock");
              iconMenu.classList.remove("active");
              menuBody.classList.remove("active");
            }
  
            window.scrollTo({
              top: gotoBlockValue,
              behavior: "smooth",
            });
            event.preventDefault();
          }
        }
      }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');    
    document.body.style.overflow = 'hidden'; 
    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
    
}

    function closeModal (modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show', 'fade');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}   


function modal (triggerSelector, modalSelector, pagePriceSelector, pageCoursesSelector, modalTimerId){
      
    // Modal

    const buttonsModal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    price = document.querySelector(pagePriceSelector),
    courses = document.querySelector(pageCoursesSelector);  

  
    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == ''){
       closeModal(modalSelector);
    }
    });

    courses.addEventListener('click', (e) => {
    if (e.target === courses || e.target.getAttribute('data-modal') == ''){
        openModal(modalSelector, modalTimerId);
        }
    });

    price.addEventListener('click', (e) => {
    if (e.target === price || e.target.getAttribute('data-modal') == ''){
        openModal(modalSelector, modalTimerId);
        }
    });

    document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show', 'fade')){
       closeModal(modalSelector);
    }
    }) 

    buttonsModal.forEach (btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    })

  


    function showModalByScroll(){
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
    openModal(modalSelector, modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
    }
    }

    window.addEventListener('scroll', showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/team.js":
/*!****************************!*\
  !*** ./js/modules/team.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _servises_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servises/servises */ "./js/servises/servises.js");


function team(){
       
    // Team:
       (0,_servises_servises__WEBPACK_IMPORTED_MODULE_0__.getData)('http://localhost:3000/teacher')
       .then(data => createTeamCard(data));

    function createTeamCard(data){
        data.forEach(({img, name, position,text}) => {
            const element = document.createElement('div');
        
            element.classList.add('team__column');

            element.innerHTML = `
            <div class="team__card">
                <div class="team__img">
                    <img src=${img} alt="Team Image" />
                </div>
                <div class="team__content">
                    <h2>${name}</h2>
                    <h3>${position}</h3>
                    <p>
                        ${text}
                    </p>
                </div>
            </div>
        `;

        document.querySelector('.team__row').append(element);
        });
    };

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (id, deadline){
     
    // Timer

    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };

    function getZero(num){
        if (num >=0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

          updateClock();

        function updateClock(){
            const t = getTimeRemaining(endtime);      
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
      
            if (t.total <=0) {
                clearInterval(timeInterval);        
      
            }
        };
    };
    setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/servises/servises.js":
/*!*********************************!*\
  !*** ./js/servises/servises.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getData: () => (/* binding */ getData),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

   
const getData = async (url) => {
    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./js/modules/header.js");
/* harmony import */ var _modules_advantages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/advantages */ "./js/modules/advantages.js");
/* harmony import */ var _modules_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/courses */ "./js/modules/courses.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/team */ "./js/modules/team.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");










window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout (() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__.openModal)('#popup', modalTimerId), 50000);
    
    (0,_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_advantages__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_courses__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])('form', modalTimerId);
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-modal]', '#popup', '.price__info', '.courses__row', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: ".reviews-show",
        slide: ".reviews-show__slide",
        totalCounter: '#total',
        currentCounter: '#current',
        nextArrow: ".reviews-show__slider-next",
        prevArrow: ".reviews-show__slider-prev"
    });
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: ".pansion-show",
        slide: ".pansion-show__slide",
        totalCounter: '#pansion-total',
        currentCounter: '#pansion-current',
        nextArrow: ".pansion-show__slider-next",
        prevArrow: ".pansion-show__slider-prev"
    });
    (0,_modules_team__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_7__["default"])('.promotion__timer-timer', '2024-01-25');
          
});





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map