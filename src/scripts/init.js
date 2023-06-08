import fillExampleSelects from "./dynamicSelectFill.js";
import concat from "./buttonResults.js";

document.addEventListener("DOMContentLoaded", fillExampleSelects);//будет срабатывать - один раз при загрузке html

const myButton = document.getElementById('myButton'); //получим кнопку по айдишнику
myButton.addEventListener('click', concat) //добавлям слушателя к нашей кнопке, при нажатие - будем вызвыать concat
