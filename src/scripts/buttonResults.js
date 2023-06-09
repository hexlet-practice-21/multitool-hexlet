const buttonResult = () => {
    const firstSelectResult = document.getElementById("firstSelect"); //достаем значение из первого селекта

    const secondSelectResult = document.getElementById("secondSelect"); //достаем значение из второго селекта

    const numberForConvert = document.getElementById("number");
    const firstAndsecondSelect = firstSelectResult.value + " " + secondSelectResult.value + " " + numberForConvert.value; //поставим текст
    document.getElementById('result').setAttribute("value", firstAndsecondSelect)
}

export default buttonResult;