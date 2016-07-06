function pixabayCallback (data) {

    $('.imageSearchResults').empty();

    var hits = data.hits;

    var length = hits.length;
    var i = 0;

    for (i = 0; i < length; i++) {
        var src = hits[i].previewURL;
        var img = document.createElement('img');

        $(img).attr('src', src);
        $('.imageSearchResults').append(img);
    }
}

$(function () {
    $('#searchButton').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'https://pixabay.com/api/',
            method: 'GET',
            dataType: 'jsonp',
            data: {
                key: '2622995-abd40e805ecd1477d22481ce2',
                q: $('#userQuery').val()
            },
            success: pixabayCallback
        });
    });
});