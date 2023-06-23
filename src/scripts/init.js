import { lengthFillSelects, speedFillSelects } from './dynamicSelectFill.js';
import { lengthButtonResult, speedButtonResult } from './buttonResults.js';
import { lengthButtonSwitch, speedButtonSwitch } from './buttonSwitch.js';

const clickListener = (buttonId, buttonFunction) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', buttonFunction);
};

document.addEventListener('DOMContentLoaded', lengthFillSelects);
clickListener('length-result-button', lengthButtonResult);
clickListener('length-switch-button', lengthButtonSwitch);

document.addEventListener('DOMContentLoaded', speedFillSelects);
clickListener('speed-result-button', speedButtonResult);
clickListener('speed-switch-button', speedButtonSwitch);

export default clickListener;
