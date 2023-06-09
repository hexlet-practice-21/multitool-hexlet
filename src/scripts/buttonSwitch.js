const buttonSwitch = () => {
    const firstSelectResult = document.getElementById("firstSelect").value; //достаем значение из первого селекта
    const secondSelectResult = document.getElementById("secondSelect").value; //достаем значение из второго селекта
    document.getElementById('firstSelect').value = secondSelectResult;
    document.getElementById('secondSelect').value = firstSelectResult;

}

export default buttonSwitch;