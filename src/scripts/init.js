import fillExampleSelects from "./dynamicSelectFill.js";
import buttonResult from "./buttonResults.js";
import buttonSwitch from "./buttonSwitch.js"

document.addEventListener("DOMContentLoaded", fillExampleSelects);//будет срабатывать - один раз при загрузке html

const resultButton = document.getElementById('resultBut'); //получим кнопку по айдишнику
resultButton.addEventListener('click', buttonResult) //добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult

const switchButton = document.getElementById('switch'); //получим кнопку по айдишнику
switchButton.addEventListener('click', buttonSwitch) //добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать buttonResult
