import {
  lengthFillSelects, speedFillSelects, weigthFillSelects, volumeFillSelects,
} from './dynamicSelectFill.js';
import {
  lengthButtonResult, speedButtonResult, weigthButtonResult, volumeButtonResult,
} from './buttonResults.js';
import {
  lengthButtonSwitch, speedButtonSwitch, weigthButtonSwitch, volumeButtonSwitch,
} from './buttonSwitch.js';

const clickListener = (buttonId, buttonFunction) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', buttonFunction);
};

document.addEventListener('DOMContentLoaded', lengthFillSelects);
clickListener('length-result-button', lengthButtonResult);
clickListener('length-switch-button', lengthButtonSwitch);

document.addEventListener('DOMContentLoaded', weigthFillSelects);
clickListener('weigth-result-button', weigthButtonResult);
clickListener('weigth-switch-button', weigthButtonSwitch);

document.addEventListener('DOMContentLoaded', speedFillSelects);
clickListener('speed-result-button', speedButtonResult);
clickListener('speed-switch-button', speedButtonSwitch);

document.addEventListener('DOMContentLoaded', volumeFillSelects);
clickListener('volume-result-button', volumeButtonResult);
clickListener('volume-switch-button', volumeButtonSwitch);

export default clickListener;
