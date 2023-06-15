import weigthConversion from './conversion/weigthConversion.js';

const isNumeric = (string) => [...string].every((c) => '0123456789'.includes(c)) && string !== ''; // функция чекает чтобы были только цифры и не пустая строка. (валидация)

export const lengthButtonResult = () => {
  document.getElementById('length-number-validator').setAttribute('style', 'opacity: 0'); // Скрывает надпись о нарушении валидации при каждом вводе
  const firstSelectResult = document.getElementById('length-first-select').value; // достаем значение из первого селекта

  const secondSelectResult = document.getElementById('length-second-select').value; // достаем значение из второго селекта

  const numberForConvert = document.getElementById('length-number').value; // достает значение из формы ввода
  if (isNumeric(numberForConvert)) { // Проверяет валидацию
    const result = `тест ${firstSelectResult} ${secondSelectResult}`; // ТУТ БУДЕТ ФУНКЦИЯ КОТОРАЯ СЧИТАЕТ ВСЕ

    document.getElementById('length-result-output').setAttribute('value', result); // пишет результат в поле
    navigator.clipboard.writeText(result); // копирует результат в буфер обмена
  } else {
    document.getElementById('length-number-validator').setAttribute('style', 'opacity: 1'); // Показывает ошибку валидации
  }
};

export const weigthButtonResult = () => {
  document.getElementById('weigth-number-validator').setAttribute('style', 'opacity: 0'); // Скрывает надпись о нарушении валидации при каждом вводе
  const firstSelectResult = document.getElementById('weigth-first-select').value; // достаем значение из первого селекта

  const secondSelectResult = document.getElementById('weigth-second-select').value; // достаем значение из второго селекта

  const numberForConvert = document.getElementById('weigth-number').value; // достает значение из формы ввода
  if (isNumeric(numberForConvert)) { // Проверяет валидацию
    const result = weigthConversion(numberForConvert, firstSelectResult)[secondSelectResult];

    document.getElementById('weigth-result-output').setAttribute('value', result); // пишет результат в поле
    navigator.clipboard.writeText(result); // копирует результат в буфер обмена
  } else {
    document.getElementById('weigth-number-validator').setAttribute('style', 'opacity: 1'); // Показывает ошибку валидации
  }
};
