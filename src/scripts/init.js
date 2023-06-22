import { lengthFillSelects, dataFormatsFillSelects } from './dynamicSelectFill.js';
import { lengthButtonResult, dataFormatsButtonResult } from './buttonResults.js';
import { lengthButtonSwitch, dataFormatsButtonSwitch } from './buttonSwitch.js';


document.addEventListener('DOMContentLoaded', lengthFillSelects);// Заполнение выпадающих списков длины (один раз при загрузке сайта)

const lengthResultButton = document.getElementById('length-result-button'); // получим кнопку по айдишнику
lengthResultButton.addEventListener('click', lengthButtonResult); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const lengthSwitchButton = document.getElementById('length-switch-button'); // получим кнопку по айдишнику
lengthSwitchButton.addEventListener('click', lengthButtonSwitch); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonSwitch


document.addEventListener('DOMContentLoaded', dataFormatsFillSelects);

const dataFormatsResultButton = document.getElementById('data-formats-result-button');
dataFormatsResultButton.addEventListener('click', dataFormatsButtonResult);

const dataFormatsSwitchButton = document.getElementById('data-formats-switch-button');
dataFormatsSwitchButton.addEventListener('click', dataFormatsButtonSwitch); 