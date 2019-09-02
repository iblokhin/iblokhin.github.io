function pow(x, y) {
    var result = x;

    for (var i = 1; i < y; i++) {
    result *= x;
}

    return result;
}

var x = prompt("Укажите число", '');
var y = prompt("Укажите степень", '');

console.log('Результат возведения в степень: ', pow(x, y) );
