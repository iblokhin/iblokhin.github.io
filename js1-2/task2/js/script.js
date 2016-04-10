var arrNames = [];
var i;
var userName;

for (i = 0; i<5; i++) {
    arrNames[i] = prompt('Заполнить массив именами');
}

userName = prompt('Введите имя пользователя');

for (i = 0; i < arrNames.length; i++) {
    if (arrNames[i] == userName) {
        alert (userName + ", Вы успешно вошли");
        break;
    } else if (i == (arrNames.length - 1)) {
        alert ('Неверное имя пользователя')}
}
