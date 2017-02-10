$(document).ready(function() {
    
    var w = $(window).width(); // Получаем ширину окна
    if (w <= 767) { // Если ширина окна меньше, либо равна 600
        $('.fa-bars').click(function () {
            $('.menu').removeClass('hidden-xs').addClass('min-menu');
        });

        $('.fa-user').click(function () {
            $('.log-in, .reg-in').parent().removeClass('hidden-xs');
        });
    } else if (w <= 480) {
        $('.fa-bars').click(function () {
            $('.menu').removeClass('hidden-xs').addClass('min-menu').css({
                width: '300px'
            });
        });
    }

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var menu = $(".menu"); // тут указываем ID элемента
        if (!menu.is(e.target) // если клик был не по нашему блоку
            && menu.has(e.target).length === 0) { // и не по его дочерним элементам
            menu.addClass('hidden-xs');
        }

        var reg = $(".log-in, .reg-in"); // тут указываем ID элемента
        if (!reg.is(e.target) // если клик был не по нашему блоку
            && reg.has(e.target).length === 0) { // и не по его дочерним элементам
            reg.parent().addClass('hidden-xs');
        }
    });
});
