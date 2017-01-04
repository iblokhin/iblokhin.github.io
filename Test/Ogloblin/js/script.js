$(document).ready(function () {
    var doc = document;
    var header = doc.getElementById('header');
    var scroll_dawn = doc.getElementById('scroll_dawn');
    var preface = doc.getElementById('preface');
    var gallery = doc.getElementById('gallery');
    var expedition = doc.getElementById('expedition');
    var diary = doc.getElementById('diary');
    var news = doc.getElementById('news');
    var footer = doc.getElementById('footer');

    $('.footer-arrow-up').click(function () {
        var headerHeight = $(header).offset().top - $(window).scrollTop();
        $('body,html').animate({scrollTop: headerHeight}, 1500);
    });


    scroll_dawn.addEventListener('click', display_scroll_dawn);

    // console.log($('#preface').offset().top);
    function display_scroll_dawn() {
        preface.style.display = 'block';
        gallery.style.display = 'block';
        expedition.style.display = 'block';
        diary.style.display = 'block';
        news.style.display = 'block';
        footer.style.display = 'block';

        var prefaceHeight = $('#preface').offset().top - $(window).scrollTop();
        $('body,html').animate({scrollTop: prefaceHeight}, 1500);
    }

    function display_scroll_up() {
        preface.style.display = 'none';
        gallery.style.display = 'none';
        expedition.style.display = 'none';
        diary.style.display = 'none';
        news.style.display = 'none';
        footer.style.display = 'none';
    }

    $(window).scroll(function() {
        var top_scroll = $(this).scrollTop();
        var prefaceHeight = $('#preface').offset().top - $(window).scrollTop();
        // var prefaceHeight = $('#preface').offset().top;
        // console.log(top_scroll);
        // if (this) {
        //     display_scroll_dawn();
        // }
        // console.log(prefaceHeight-300);
        if (top_scroll <= prefaceHeight){
            // $('body,html').animate({scrollTop: prefaceHeight - 400}, 1500);
            // display_scroll_up();
            // console.log("www");
        }
        // console.log($('.preface').get(0).scrollTop());
        // if (top_scroll<prefaceHeight) {
        //     display_scroll_up();
        //     // console.log(window.get(0).scrollTop());
        // }


    });

    /*run #myCarousel1 */
    $('#myCarousel1').carousel();

    /*hover on blocs .cover*/
    var cover = $('.cover');
    $(cover).each(function (index) {
        $(this).mouseover(function () {
            $(cover[index]).css({
                transition: '.5s',
                opacity: .7
            })
        });
        $(this).mouseout(function () {
            $(cover[index]).css({
                transition: '.5s',
                opacity: 1
            })
        });
    });

    /*open/close block #tagid*/
    $('#tagid').click(function () {
        $('.tab-tag').css({
            display: 'flex'
        });
    });

    $('.close').click(function () {
        $('.tab-tag').css({
            display: 'none'
        });
    })
});


$(document).ready(function() {
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find("span").first().addClass("on"); // делаем активным первый элемент меню
    });

});


function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider .nav span", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});

