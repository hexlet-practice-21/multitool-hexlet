const firstSelectValues = {
    "String": "String",
    "Hello": "Hello",
    "DOM": "DOM"
}

const secondSelectValues = {
    "API": "API",
    "Shit": "Shit",
    "World": "World"
}

const firstSelectDropDown = document.getElementById("firstSelect");

const secondSelectDropDown = document.getElementById("secondSelect");

for (let key in firstSelectValues) {
    let option = document.createElement("option");
    option.setAttribute('value', data[key]);

    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    firstSelectDropDown.appendChild(option);
}

for (let key in firstSelectValues) {
    let option = document.createElement("option");
    option.setAttribute('value', data[key]);

    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    firstSelectDropDown.appendChild(option);
}

for (let key in secondSelectValues) {
    let option = document.createElement("option");
    option.setAttribute('value', data[key]);

    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    secondSelectDropDown.appendChild(option);
}
