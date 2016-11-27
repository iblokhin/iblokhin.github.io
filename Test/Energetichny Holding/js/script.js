/*-/-/-/-/- show/hide menu -/-/-/-/-*/

$(function() {
    var pull = $('#pull-menu');
    menu = $('.menu ul');
    // menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});

$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

/*-/-/-/-/- end menu -/-/-/-/-*/

/*-/-/-/-/- show/hide form -/-/-/-/-*/

$(function () {
     var form = $('#forma');
     li = $('#login');
    // menuHeight = menu.height();

    $(li).on('click', function(e) {
        e.preventDefault();
        form.slideToggle();
    });
});

/*-/-/-/-/- end form -/-/-/-/-*/