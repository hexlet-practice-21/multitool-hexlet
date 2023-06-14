import { lengthFillSelects, speedFillSelects} from './dynamicSelectFill.js';
import { lengthButtonResult, speedButtonResult } from './buttonResults.js';
import { lengthButtonSwitch, speedButtonSwitch } from './buttonSwitch.js';

document.addEventListener('DOMContentLoaded', lengthFillSelects);// Заполнение выпадающих списков длины (один раз при загрузке сайта)

const lengthResultButton = document.getElementById('length-result-button'); // получим кнопку по айдишнику
lengthResultButton.addEventListener('click', lengthButtonResult); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const lengthSwitchButton = document.getElementById('length-switch-button'); // получим кнопку по айдишнику
lengthSwitchButton.addEventListener('click', lengthButtonSwitch); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonSwitch


document.addEventListener('DOMContentLoaded', speedFillSelects);// Заполнение выпадающих списков длины (один раз при загрузке сайта)

const speedResultButton = document.getElementById('speed-result-button'); // получим кнопку по айдишнику
speedResultButton.addEventListener('click', speedButtonResult); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const speedSwitchButton = document.getElementById('speed-switch-button'); // получим кнопку по айдишнику
speedSwitchButton.addEventListener('click', speedButtonSwitch); // добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonSwitch



