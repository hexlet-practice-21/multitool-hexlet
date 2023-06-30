const buttonSwitch = (id1, id2) => {
  const firstSelectResult = document.getElementById(id1).value;
  const secondSelectResult = document.getElementById(id2).value;
  document.getElementById(id1).value = secondSelectResult;
  document.getElementById(id2).value = firstSelectResult;
};

const lengthButtonSwitch = () => buttonSwitch('length-first-select', 'length-second-select');
const weigthButtonSwitch = () => buttonSwitch('weigth-first-select', 'weigth-second-select');
const speedButtonSwitch = () => buttonSwitch('speed-first-select', 'speed-second-select');
const formatsButtonSwitch = () => buttonSwitch('data-formats-first-select', 'data-formats-second-select');
const volumeButtonSwitch = () => buttonSwitch('volume-first-select', 'volume-second-select');

export {
  buttonSwitch, lengthButtonSwitch, speedButtonSwitch,
  weigthButtonSwitch, formatsButtonSwitch, volumeButtonSwitch,
};
