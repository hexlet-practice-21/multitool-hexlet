const myButton = document.getElementById('myButton'); //получим кнопку по айдишнику
console.log(myButton);

const concat = () => {

    const firstSelectResult = document.getElementById("firstSelect"); //достаем значение из первого селекта

    const secondSelectResult = document.getElementById("secondSelect"); //достаем значение из второго селекта
    let div = document.createElement("div");
    div.setAttribute("id", "myDiv")
    let e = document.getElementById("myDiv");
    if (e !== null) {
        e.remove()
    }
    div.innerHTML = firstSelectResult.value + " " + secondSelectResult.value;

    document.getElementById('body')
        .append(div) //добавляем к бади новую ноду с текстом
}


myButton.addEventListener('click', concat)
