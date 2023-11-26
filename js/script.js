import header from './modules/header';
import advantages from './modules/advantages';
import courses from './modules/courses';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import team from './modules/team';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout (() => openModal('#popup', modalTimerId), 50000);
    
    header();
    advantages();
    courses();
    form('form', modalTimerId);
    modal('[data-modal]', '#popup', '.price__info', '.courses__row', modalTimerId);
    slider({
        container: ".reviews-show",
        slide: ".reviews-show__slide",
        totalCounter: '#total',
        currentCounter: '#current',
        nextArrow: ".reviews-show__slider-next",
        prevArrow: ".reviews-show__slider-prev"
    });
    slider({
        container: ".pansion-show",
        slide: ".pansion-show__slide",
        totalCounter: '#pansion-total',
        currentCounter: '#pansion-current',
        nextArrow: ".pansion-show__slider-next",
        prevArrow: ".pansion-show__slider-prev"
    });
    team();
    timer('.promotion__timer-timer', '2024-01-25');
          
});




