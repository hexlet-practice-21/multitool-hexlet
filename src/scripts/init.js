import { lengthFillSelects, weigthFillSelects } from './dynamicSelectFill.js';
import { lengthButtonResult, weigthButtonResult } from './buttonResults.js';
import { lengthButtonSwitch, weigthButtonSwitch } from './buttonSwitch.js';

document.addEventListener('DOMContentLoaded', lengthFillSelects);// Заполнение выпадающих списков длины (один раз при загрузке сайта)

const lengthResultButton = document.getElementById('length-result-button'); // получим кнопку по айдишнику
lengthResultButton.addEventListener('click', lengthButtonResult); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const lengthSwitchButton = document.getElementById('length-switch-button'); // получим кнопку по айдишнику
lengthSwitchButton.addEventListener('click', lengthButtonSwitch); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonSwitch


document.addEventListener('DOMContentLoaded', weigthFillSelects);// Заполнение выпадающих списков длины (один раз при загрузке сайта)

const weigtResultButton = document.getElementById('weigth-result-button'); // получим кнопку по айдишнику
weigtResultButton.addEventListener('click', weigthButtonResult); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const weigtSwitchButton = document.getElementById('weigth-switch-button'); // получим кнопку по айдишнику
weigtSwitchButton.addEventListener('click', weigthButtonSwitch); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonSwitch
