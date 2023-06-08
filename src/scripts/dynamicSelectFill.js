// наша "база данных"
const firstSelectValues = {
  Kilometer: 'Kilometer',
  Meter: 'Meter',
  Centimeter: 'Centimeter',
  Millimeter: 'Millimeter',
};

const secondSelectValues = {
  Kilometer: 'Kilometer',
  Meter: 'Meter',
  Centimeter: 'Centimeter',
  Millimeter: 'Millimeter',
};

const fillExampleSelects = () => {
  const firstSelectDropDown = document.getElementById('firstSelect'); // получаем первый селект

  const secondSelectDropDown = document.getElementById('secondSelect'); // получаем второй селект
  Object.keys(firstSelectValues).forEach((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', firstSelectValues[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    firstSelectDropDown.appendChild(option);
  });

  Object.keys(secondSelectValues).forEach((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', secondSelectValues[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    secondSelectDropDown.appendChild(option);
  });
};

export default fillExampleSelects; // экспортнем по умолчанию для тестов
