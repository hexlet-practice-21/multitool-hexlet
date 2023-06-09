
//наша "база данных"
const firstSelectValues = {
    "Kilometer": "Kilometer",
    "Meter": "Meter",
    "Centimeter": "Centimeter",
    "Millimeter": "Millimeter"
}

const secondSelectValues = {
    "Kilometer": "Kilometer",
    "Meter": "Meter",
    "Centimeter": "Centimeter",
    "Millimeter": "Millimeter"
}


const fillExampleSelects = () => {
    const firstSelectDropDown = document.getElementById("firstSelect"); //получаем первый селект

    const secondSelectDropDown = document.getElementById("secondSelect"); //получаем второй селект


    for (let key in firstSelectValues) {
        let option = document.createElement("option");
        option.setAttribute('value', firstSelectValues[key]);

        let optionText = document.createTextNode(key);
        option.appendChild(optionText);

        firstSelectDropDown.appendChild(option);
    }

    for (let key in secondSelectValues) {
        let option = document.createElement("option");
        option.setAttribute('value', secondSelectValues[key]);

        let optionText = document.createTextNode(key);
        option.appendChild(optionText);

        secondSelectDropDown.appendChild(option);
    }
}

export default fillExampleSelects; //экспортнем по умолчанию для тестов