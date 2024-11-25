document.getElementById('p1.1').addEventListener('click', function() {
    const responseMessage = document.getElementById('p1.1.1');
    responseMessage.textContent = "Продукты Яблоки - 800 г Молоко - 200 мл Масло растительное - 100 мл + для смазывания формы Яйцо - 1 шт. Желтки - 2 шт. Сахар - 220 г Мука - 150 г Разрыхлитель - 2 ч. ложки Алкоголь (ром, коньяк, ликёр или бренди, по желанию) - 1 ст. ложка Сок лимона - 1 ч. ложка Корица молотая - 1 ч. ложка Ванильный сахар - 10 г Соль - 0,5 ч. ложки";
    responseMessage.classList.remove('p1');
});

document.getElementById('orderButton').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = "Спасибо, что выбрали нас.";
    responseMessage.classList.remove('hidden');
});

document.getElementById('p1.2').addEventListener('click', function() {
    const responseMessage = document.getElementById('p1.1.2');
    responseMessage.textContent = "Продукты (на 2 порции) Макароны - 150 г Куриное филе - 300 г Брокколи замороженная - 300 г Горошек зелёный замороженный - 100 гЛук репчатый - 100 г Сыр твёрдый - 100 г Молоко - 200 мл Масло растительное - 30 мл Соль - по вкусу Перец чёрный молотый - 1/8 ч. ложки Чеснок сушёный - 1/2 ч. ложки Помидоры сушёные хлопья - 1/2 ч. ложки Зелень свежая (петрушка, базилик) - 5 г";
    responseMessage.classList.remove('p2');
});

document.getElementById('p1.3').addEventListener('click', function() {
    const responseMessage = document.getElementById('p1.1.3');
    responseMessage.textContent = "Продукты Для теста: Молоко (охлаждённое) - 50 мл Яйцо - 1 шт. Желток - 1 шт. Сахар - 100 г Мука - 310 г Миндаль (крошка или мука) - 30 г Ванильный сахар - 10 г Соль - 1 г Для начинки: Сливы - 700 г Сахар - 140 г Крахмал кукурузный - 40-55 г";
    responseMessage.classList.remove('p3');
});

document.getElementById('p1.4').addEventListener('click', function() {
    const responseMessage = document.getElementById('p1.1.4');
    responseMessage.textContent = "Продукты Картофель - количество по желанию. Соль - по вкусу. Чеснок - по вкусу(но я советую побольше) Сало солёное - в зависимости от количества картофеля. Зубочистки (спички)- по одной на кораблик. Масло растительное - буквально два грамма поверх корабликов для сочности";
    responseMessage.classList.remove('p4');
});