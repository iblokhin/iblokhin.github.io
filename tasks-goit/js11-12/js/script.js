$(document).ready(function() {

    var leftUIEl = $('.carousel-arrow-left');
    var rightUIEl = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');

    var pixelsOffset = 225;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 225;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }
    });


    var data = {
        name: 'Блохин Игорь Николаевич',
        photo: {
            src: 'img/photo.png',
            alt: 'фото'
        },
        job: 'Студеннт курса GoFrontend Online',
        why: 'Хочу учить фронтенд, потому что:',
        cause: ['Хочу изменить свой вид деятельности',
            'Научится новым современным возможностям',
            'В независимости от ситуацыи,быть всегда восстребованым'],
        telephon: 'Мой контактный телефон:',
        number: '+380634898902',
        fb: 'Мой профиль в fb:',
        fb_link: 'www.facebook.com/IBlokhin',
        feedback: 'Мой фидбек:',
        feedback_text: 'Знаний никогда не бывает много!'
    };

    var profile = $('#profile').html();
    var content = tmpl(profile, data);

    $('.tamplate').append(content);


});