function haveEnough (money, buyApple, buyBread, costApple, costBread, result) {
    money = prompt('Сколько у вас с собой денег?');
    buyApple = prompt('Сколько вы купили яблок?');
    buyBread = prompt('Сколько вы купили батонов хлеба?');
    costApple = prompt('Сколько стоит одно яблоко?');
    costBread = prompt('Сколько стоит один батон хлеба?');
    result = money >= (buyApple * costApple) + (buyBread * costBread);

    if (result == true) {
        alert('Вам хватает денег на покупки');
    } else {
        alert('Вам не хватает денег');
    }
}


