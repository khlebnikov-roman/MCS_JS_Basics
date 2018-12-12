let money = prompt("Сколько у вас с собой денег?");
let buyApple = prompt("Сколько вы купили яблок?");
let buyBread = prompt("Сколько вы купили батонов хлеба?");
let costApple = prompt("Сколько стоит одно яблоко?");
let costBread = prompt("Сколько стоит один батон хлеба?");
let result = money >= (buyApple * costApple) + (buyBread * costBread);

document.body.innerHTML = result
console.log(result);