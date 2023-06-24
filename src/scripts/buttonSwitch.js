export const lengthButtonSwitch = () => {
  const firstSelectResult = document.getElementById('length-first-select').value; // достаем значение из первого селекта
  const secondSelectResult = document.getElementById('length-second-select').value; // достаем значение из второго селекта
  document.getElementById('length-first-select').value = secondSelectResult; // Меняем местами
  document.getElementById('length-second-select').value = firstSelectResult; // Меняем местами
};

export const weigthButtonSwitch = () => {

};

export const dataFormatsButtonSwitch = () => {
  const firstSelectResult = document.getElementById('data-formats-first-select').value;
  const secondSelectResult = document.getElementById('data-formats-second-select').value;
  document.getElementById('data-formats-first-select').value = secondSelectResult;
  document.getElementById('data-formats-second-select').value = firstSelectResult;
};