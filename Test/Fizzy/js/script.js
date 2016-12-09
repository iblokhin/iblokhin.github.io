(function($) {
    'use strict';
    $(function() {

        $('.nav').selecter(); //подключаем плагин

        var basket = $('.basket');
        var secOrder = $('.section-order');
        var divOpacity = $('.divOpacity');
        var orderHeader = $('.order-header');

        // Перебираем массив и назначаем событие
        $(basket).each(function(index) {
            $(this).on('click', function () {
                $(secOrder).animate({
                    width: 'toggle'
                }, 500);
                $(divOpacity).css({
                    transition: '.5s',
                    opacity: .9,
                    zIndex: 10
                });
            });
        });

        //закрываем корзину при клике в не поля order
        $(divOpacity).on('click', function () {
            $(secOrder).animate({
                width: 'toggle'
            }, 1000);
            $(divOpacity).css({
                transition: '.2s',
                opacity: 0,
                zIndex: -10
            });
        });

        //закрываем корзину при клике на orderHeader в заголовке корзины
        $(orderHeader).on('click', function () {
            $(secOrder).animate({
                width: 'toggle'
            }, 500);
            $(divOpacity).animate({
                opacity: 0,
                zIndex: -10
            }, 500);
        });

        $('.nav').slideToggle('slow');
    });
})(jQuery);