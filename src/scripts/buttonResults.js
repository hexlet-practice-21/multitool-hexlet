import speedConversion from './conversion/speedConversion.js';
import lengthConversion from './conversion/lengthConversion.js';
import weigthConversion from './conversion/weigthConversion.js';
import volumeConversion from './conversion/volumeConversion.js';

const isNumeric = (string) => {
  const isEmpty = string !== '';
  if (string.includes('.')) {
    const isFruction = [...string].every((c) => '.0123456789'.includes(c));
    const isOneDot = string.substr(2).includes('.') === false;
    const isCorrectFraction = string.startsWith('0.') && string.length >= 3;
    return isOneDot && isCorrectFraction && isFruction && isEmpty;
  }
  const isNumber = [...string].every((c) => '0123456789'.includes(c));
  const isFirsZero = string[0] !== '0';
  return isNumber && isEmpty && isFirsZero;
};


const buttonResult = (input, validator, firstSelect, secondSelect, output, convertFunction) => {
  document.getElementById(validator).setAttribute('style', 'opacity: 0'); // сбрасывает ошибку
  const firstSelectResult = document.getElementById(firstSelect).value;
  const secondSelectResult = document.getElementById(secondSelect).value;
  const numberForConvert = document.getElementById(input).value;
  if (isNumeric(numberForConvert)) { // проверяет валидацию
    const result = convertFunction(numberForConvert, firstSelectResult)[secondSelectResult];
    document.getElementById(output).setAttribute('value', result); // выводит результат
    navigator.clipboard.writeText(result); // копирует в буфер обмена
  } else { // если валидация не прошла
    document.getElementById(validator).setAttribute('style', 'opacity: 1'); // Показывает ошибку
  }
};

const lengthButtonResult = () => buttonResult('length-number', 'length-number-validator', 'length-first-select', 'length-second-select', 'length-result-output', lengthConversion);
const weigthButtonResult = () => buttonResult('weigth-number', 'weigth-number-validator', 'weigth-first-select', 'weigth-second-select', 'weigth-result-output', weigthConversion);
const speedButtonResult = () => buttonResult('speed-number', 'speed-number-validator', 'speed-first-select', 'speed-second-select', 'speed-result-output', speedConversion);
const volumeButtonResult = () => buttonResult('volume-number', 'volume-number-validator', 'volume-first-select', 'volume-second-select', 'volume-result-output', volumeConversion);
export { lengthButtonResult, speedButtonResult, buttonResult };
export { isNumeric, weigthButtonResult, volumeButtonResult };
