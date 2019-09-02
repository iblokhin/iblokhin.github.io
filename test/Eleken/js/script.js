$(document).ready(function(){
    
    $('.btn-subs').click(function () {
        $('.form').show('500').css({
            'box-shadow': '0 0 0 99999px rgba(0, 0, 0, 0.8)',
            'z-index': 10000
        });
    });

    $('.fa-times').click(function () {
        $('.form').hide('500');
    });

    $('.fa-search').click(function () {
        $('.search input').css({
            width: '100px',
            outline: 'none',
            border: '1px solid rgba(51, 51, 51, 0.5)',
            background: '#eee'
        });
    });

    $('.search input').blur(function () {
        $(this).css({
            width: '20px',
            outline: 'none',
            border: '1px solid transparent'
        });
        $(this).val('');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var inputSearch = $(".search input"); // тут указываем ID элемента
        if (!inputSearch.is(e.target) // если клик был не по нашему блоку
            && inputSearch.has(e.target).length === 0) { // и не по его дочерним элементам
            inputSearch.css({
                width: '20px',
                outline: 'none',
                border: '1px solid transparent',
                background: '#fff'
            });
            $(".search input").val('');
        }

        var form = $(".form"); // тут указываем ID элемента
        if (!form.is(e.target) // если клик был не по нашему блоку
            && form.has(e.target).length === 0) { // и не по его дочерним элементам
            form.hide('500');
        }
    });
    
});