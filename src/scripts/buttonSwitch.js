export const lengthButtonSwitch = () => {
  const firstSelectResult = document.getElementById('length-first-select').value; // достаем значение из первого селекта
  const secondSelectResult = document.getElementById('length-second-select').value; // достаем значение из второго селекта
  document.getElementById('length-first-select').value = secondSelectResult; // Меняем местами
  document.getElementById('length-second-select').value = firstSelectResult; // Меняем местами
};

export const weigthButtonSwitch = () => {

};