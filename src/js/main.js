import accardeon from './modules/accardeon';
import calc from './modules/calc';
import checkNumInput from './modules/checkText.inputs';
import filter from './modules/filter';
import forms from './modules/forms';
import mask from './modules/mask';
import modals from './modules/modals';
import pictureSize from './modules/pictureSize';
import showMore from './modules/showMore';
import sliders from './modules/sliders';



window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn' );
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkNumInput('[name="name"]');
    checkNumInput('[name="message"]');
    showMore('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accardeon('.accordion-heading');
}); 