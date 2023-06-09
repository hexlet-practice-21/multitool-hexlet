const createSelectOptions = (selectId, optionsArr) => {
  const result = { selectId, options: {} };
  optionsArr.forEach((option) => { result.options[option] = option; });
  return result;
};

const fillSelect = (selectOptions) => {
  const select = document.getElementById(selectOptions.selectId);
  Object.keys(selectOptions.options).forEach((key) => {
    const option = document.createElement('option');
    option.setAttribute('value', selectOptions.options[key]);

    const optionText = document.createTextNode(key);
    option.appendChild(optionText);

    select.appendChild(option);
  });
};

const lengthFillSelects = () => {
  const speedOptionsOne = createSelectOptions('length-first-select', ['Kilometers', 'Meters', 'Centimeters', 'Millimeters']);
  const speedOptionsTwo = createSelectOptions('length-second-select', ['Kilometers', 'Meters', 'Centimeters', 'Millimeters']);
  fillSelect(speedOptionsOne);
  fillSelect(speedOptionsTwo);
};

const weigthFillSelects = () => {
  const speedOptionsOne = createSelectOptions('weigth-first-select', ['Kilograms', 'Gram', 'Ton', 'Pound', 'Ounce']);
  const speedOptionsTwo = createSelectOptions('weigth-second-select', ['Kilograms', 'Gram', 'Ton', 'Pound', 'Ounce']);
  fillSelect(speedOptionsOne);
  fillSelect(speedOptionsTwo);
};

const speedFillSelects = () => {
  const speedOptionsOne = createSelectOptions('speed-first-select', ['Kilometers', 'Miles', 'Knots']);
  const speedOptionsTwo = createSelectOptions('speed-second-select', ['Kilometers', 'Miles', 'Knots']);

  fillSelect(speedOptionsOne);
  fillSelect(speedOptionsTwo);
};

const volumeFillSelects = () => {
  const volumeOptionsOne = createSelectOptions('volume-first-select', ['Liters', 'Milliliters', 'CubicMeter']);
  const volumeOptionsTwo = createSelectOptions('volume-second-select', ['Liters', 'Milliliters', 'CubicMeter']);
  fillSelect(volumeOptionsOne);
  fillSelect(volumeOptionsTwo);
};

export {
  createSelectOptions, fillSelect, lengthFillSelects, speedFillSelects,
  weigthFillSelects, volumeFillSelects,

};
