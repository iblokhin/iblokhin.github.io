$(function () {

    $('.tab_item').not(':first').hide();
    $('.wrapper .tab').click(function () {
        $('.wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab_item').hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass('active');

    $('input').hover(function () {
        $(this)
            .siblings('.hint')
            .fadeToggle()
            .animate({
                fontSize: '14px'
            });
    });

    $('.button').click(function () {
        $('.hint')
            .fadeToggle()
            .animate({
                fontSize: '14px'
            });
    });




});