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


export const speedFillSelects = () => {
  const lengthFirstSelectValues = { // Единицы первого выпадающего списка
    Kilometers: 'Kilometers',
    Miles: 'Miles',
    Knots: 'Knots',
  };

  const lengthSecondSelectValues = { // Единицы второго выпадающего списка
    Kilometers: 'Kilometers',
    Miles: 'Miles',
    Knots: 'Knots',
  };

  const firstSelectDropDown = document.getElementById('speed-first-select'); // Получаем первый выпадающий список
  const secondSelectDropDown = document.getElementById('speed-second-select'); // Получаем второй выпадающий список

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



