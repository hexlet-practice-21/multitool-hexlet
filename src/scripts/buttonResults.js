import convertToMetricLength from './convertToMetricLength.js';

const isNumeric = (string) => [...string].every((c) => '0123456789'.includes(c)) && string !== ''; // проверка валидации на цифры

const buttonResult = () => {
  document.getElementById('number-validator').setAttribute('style', 'opacity: 0'); // Скрывает надпись о нарушении валидации при каждом вводе
  const firstSelectResult = document.getElementById('firstSelect').value; // достаем значение из первого селекта

  const secondSelectResult = document.getElementById('secondSelect').value; // достаем значение из второго селекта

  const numberForConvert = document.getElementById('number').value; // достает значение из формы ввода
  if (isNumeric(numberForConvert)) {
    const result = convertToMetricLength(numberForConvert, firstSelectResult)[secondSelectResult];
    document.getElementById('result').setAttribute('value', result);
    navigator.clipboard.writeText(result);
  } else {
    document.getElementById('number-validator').setAttribute('style', 'opacity: 1'); // Показывает ошибку валидации
  }
};

export default buttonResult;
