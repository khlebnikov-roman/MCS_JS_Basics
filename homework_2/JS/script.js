let wBcolor = document.querySelector("body");
let quest1 = prompt("Какой будет фон страницы?");
wBcolor.style["background-color"] = quest1;

let wColor = document.querySelector(".page");
let quest2 = prompt("Какой будет цвет текста на странице?");
wColor.style["color"] = quest2;

let wName = document.querySelector("span.name");
let quest3 = prompt("Как зовут человека, который вас вдохновляет?");
wName.innerHTML = quest3;

let wImg = document.querySelector("img");
let quest4 = prompt("Введите адрес картинки");
wImg.setAttribute("src", quest4);

let anima = document.querySelector(".shortBio");
anima.className += " animated";









