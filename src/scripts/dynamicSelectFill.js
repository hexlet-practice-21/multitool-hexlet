export const lengthFillSelects = () => {
  const lengthFirstSelectValues = { // Единицы первого выпадающего списка
    Kilometer: 'Kilometer',
    Meter: 'Meter',
    Centimeter: 'Centimeter',
    Millimeter: 'Millimeter',
  };

  const lengthSecondSelectValues = { // Единицы второго выпадающего списка
    Kilometer: 'Kilometer',
    Meter: 'Meter',
    Centimeter: 'Centimeter',
    Millimeter: 'Millimeter',
  };

  const firstSelectDropDown = document.getElementById('length-first-select'); // Получаем первый выпадающий список
  const secondSelectDropDown = document.getElementById('length-second-select'); // Получаем второй выпадающий список

  Object.keys(lengthFirstSelectValues).forEach((key) => { // заполняем 1
    const option = document.createElement('option');
    option.setAttribute('value', lengthFirstSelectValues[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    firstSelectDropDown.appendChild(option);
  });

  Object.keys(lengthSecondSelectValues).forEach((key) => { // заполняем 2
    const option = document.createElement('option');
    option.setAttribute('value', lengthSecondSelectValues[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    secondSelectDropDown.appendChild(option);
  });
};

export const weigthFillSelects = () => {

};

export const dataFormatsFillSelects = () => {
  const dataFormatsFirstSelectValues = {
    Yaml: 'Yaml',
    Json: 'Json',
  };

  const dataFormatsSecondSelectValues = {
    Yaml: 'Yaml',
    Json: 'Json',
  };

  const firstSelectDropDown = document.getElementById('data-formats-first-select');
  const secondSelectDropDown = document.getElementById('data-formats-second-select');

  Object.keys(dataFormatsFirstSelectValues).forEach((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', dataFormatsFirstSelectValues[key]);
    const optionText = document.createTextNode(key);
    option.appendChild(optionText);
    firstSelectDropDown.appendChild(option);
  });

  Object.keys(dataFormatsSecondSelectValues).forEach((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', dataFormatsSecondSelectValues[key]);
    const optionText = document.createTextNode(key);
    option.appendChild(optionText);
    secondSelectDropDown.appendChild(option);
  });
};