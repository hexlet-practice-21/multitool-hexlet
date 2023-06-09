const concat = () => {
    const firstSelectResult = document.getElementById("firstSelect"); //достаем значение из первого селекта

    const secondSelectResult = document.getElementById("secondSelect"); //достаем значение из второго селекта
    let div = document.createElement("div"); //создадим див в который добавим наш текст
    div.setAttribute("id", "myDiv") //присвоим уникальный айдишник
    const myDivDocument = document.getElementById("myDiv"); //если уже существует - надо очистить
    if (myDivDocument !== null) {
        myDivDocument.remove()
    }
    div.innerHTML = firstSelectResult.value + " " + secondSelectResult.value; //поставим текст

    document.getElementById('body')
        .append(div) //добавляем к бади новую ноду с текстом, в наших случаях будет не бади - инпут
}

export default concat;
