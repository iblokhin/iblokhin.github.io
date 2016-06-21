$(document).ready(function(){

    var angle = 0;
    function galleryspin(sign) {
        spinner = document.querySelector("#spinner");
        if (!sign) { angle = angle + 45; }
        else { angle = angle - 45; }
        spinner.setAttribute("style",
            "-webkit-transform: rotateY("+ angle +"deg); " +
            "-moz-transform: rotateY("+ angle +"deg); " +
            "transform: rotateY("+ angle +"deg);");
    }

    var $menuItem = $('.menu-item');
    $menuItem.hover(function () {
        var $submenu1 = $(this).find('.submenu1');
        $submenu1.slideToggle();
    });

    var $submenu1Item = $('.submenu1-item');
    $submenu1Item.hover(function () {
        var $submenu2 = $(this).find('.submenu2');
        $submenu2.slideToggle();
    });

    var $submenu2Item = $('.submenu2-item');
    $submenu2Item.hover(function () {
        var $submenu3 = $(this).find('.submenu3');
        $submenu3.slideToggle();
    });

    $('#select, #check-one').styler();


});