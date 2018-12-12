console.log("You are add ");

const Colored = document.querySelector(".colored");
console.log(Colored);

let quest = prompt("Какой ты хочешь цвет?");
// Colored.style.backgroundColor = "blue";
Colored.style['background-color'] = quest;