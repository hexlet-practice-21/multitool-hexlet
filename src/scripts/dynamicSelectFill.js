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
  const lengthFirstSelectValues = { // Единицы первого выпадающего списка
    Kilograms: 'Kilogram',
    Gram: 'Gram',
    Ton: 'Ton',
    Pound: 'Pound',
    Ounce: 'Ounce',
  };

  const lengthSecondSelectValues = { // Единицы второго выпадающего списка
    Kilograms: 'Kilogram',
    Gram: 'Gram',
    Ton: 'Ton',
    Pound: 'Pound',
    Ounce: 'Ounce',
  };

  const firstSelectDropDown = document.getElementById('weigth-first-select'); // Получаем первый выпадающий список
  const secondSelectDropDown = document.getElementById('weigth-second-select'); // Получаем второй выпадающий список

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
