$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 10000
    });

    // $('#myCarousel2').carousel({
    //     interval: 10000
    // })

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    function initMap() {
        var latlng = new google.maps.LatLng(50.399143, 30.375597);

        var settings = {
            zoom: 17,
            center: latlng,
            mapTypeControl: true,
            // mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: true,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('block-map'), settings);

        // var contentString = '<div id="content">'+
        //                     '<div id="siteNotice">'+
        //                     '</div>'+
        //                     '<h1 id="firstHeading" class="firstHeading">Høgenhaug</h1>'+
        //                     '<div id="bodyContent">'+
        //                     '<span class="reserve-tel"><i class="fa fa-phone" aria-hidden="true"></i>093 333 33 33</span>'+
        //                     '<p>Софиевская Борщаговка, ЖК "София", ул. Боголюбова 4</p>'+
        //                     '</div>'+
        //                     '</div>';

        var contentString = '<ul class="map-contacts">'+
                            '<li>'+
                            '<i class="fa fa-map-marker" aria-hidden="true"></i>'+
                            '<p>Софиевская Борщаговка</p>'+
                            '<p>ЖК "София"</p>'+
                            '<p>ул. Боголюбова 4</p>'+
                            '</li>'+
                            '<li>'+
                            '<span class="map-tel"><i class="fa fa-phone" aria-hidden="true"></i>093 333 33 33</span>'+
                            '</li>'+
                            '<li>'+
                            '<i class="fa fa-whatsapp" aria-hidden="true"></i>'+
                            '<i class="fa fa-viber fa-2x"></i>'+
                            '</li>'+
                            '</ul>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 360,
            maxHeight: 270,
            opacity: 0.3
            // position: new google.maps.Point(55.399143, -50.375597)
        });
        // infowindow.setPosition(new google.maps.LatLng(55.399143, -31.375597));


        var companyPos = new google.maps.LatLng(50.399143, 30.375597);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map
            // title: 'Hello World'
            // zIndex: 3
            // anchorPoint: new google.maps.Point(0, 5)
        });

        google.maps.event.addListener(companyMarker, 'click', function() {
            infowindow.open(map,companyMarker);
        });

        // infowindow.open(map,companyMarker);

        google.maps.event.addListener(infowindow, 'domready', function() {

            // Reference to the DIV that wraps the bottom of infowindow
            var iwOuter = $('.gm-style-iw');

            iwOuter.css({top: '19px'});

            /* Since this div is in a position prior to .gm-div style-iw.
             * We use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
             */
            var iwBackground = iwOuter.prev();

            // Removes background shadow DIV
            iwBackground.children(':nth-child(2)').css({'display' : 'none'});

            // Removes white background DIV
            iwBackground.children(':nth-child(4)').css({'display' : 'none'});

            // Moves the infowindow 115px to the right.
            iwOuter.parent().parent().css({left: '155px'});

            // Moves the shadow of the arrow 76px to the left margin.
            iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 40px !important;'});
            iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'top: 19px !important;'});

            // Moves the arrow 76px to the left margin.
            iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 40px !important;'});
            iwBackground.children(':nth-child(3)').children().children().attr('style', function(i,s){ return s + 'background-color: rgba(99, 31, 169, 0.8);'});

            // Changes the desired tail shadow color.
            iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

            // Reference to the div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            // iwCloseBtn.css({opacity: '1', right: '40px', top: '10px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
            iwCloseBtn.css({opacity: '0.7', right: '40px', top: '21px', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});

            // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
            // if($('.iw-content').height() < 140){
            //     $('.iw-bottom-gradient').css({display: 'none'});
            // }

            // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
            iwCloseBtn.mouseover(function(){
                $(this).css({opacity: '.7'});
            });
            iwCloseBtn.mouseout(function(){
                $(this).css({opacity: '1'});
            });

        });
    }

    initMap();

});