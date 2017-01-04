(function($) {
    $(function() {

        $('input').styler();
        $('select').styler();
    });

})(jQuery);

$(function() {

    /*var jsonFile = $.ajax({
        type: "POST",
        url: "quiz.json",
        data: obj,
        dataType: "json"
    }).done(function() {
        console.log('success');
        console.log('success777');
    }).fail(function() {
        console.log('fail');
    });

    console.log(jsonFile);*/
    // //отмена действия по умолчанию для кнопки submit
    // e.preventDefault();

    /*
    $.getJSON('quiz.json', {}, function(data) {

        console.log(data.boxQuestion);

        var output = "<div class='box-question'>";
        // var output="<ul class='question'>";
        for (var i in data.boxQuestion) {
            // console.log(data.boxQuestion[i].questions);
            // box_question+="<div class='title-question'>" + "<span>" + data.boxQuestion[i].titleQuestion.numberBox + "</span>" + "<h2>" + data.boxQuestion[i].titleQuestion.title1 + "</h2>" + "</div>";
            // box_question+="<div class='title-question'>" + data.boxQuestion[i].titleQuestion.title1 + "</div>";
            // box_question+="<ul class='question'>" + data.boxQuestion[i].titleQuestion + "</ul>";
            // box_question+="<ul class='question'>" +
            //                   "<li>" +
            //                       "<p>" + data.boxQuestion[1].question.listQuest.quest1 + "</p>" +
            //                   "</li>" +
            //                   "<li>" +
            //                       "<div class='box-radiobtn'>" +
            //                           "<label>" + "<input name='answer20' type='radio' value='1'>" + data.boxQuestion[1].question.listAnswer.answ1 + "</label>" +
            //                           "<label>" + "<input name='answer20' type='radio' value='0'>" + data.boxQuestion[1].question.listAnswer.answ2 + "</label>" +
            //                       "</div>" +
            //                   "</li>" +
            //               "</ul>";
            // output+="<li>" + data.question[0].p + "</li>";
            // output+="<li>" + "<div class='box-radiobtn'>" + data.question[i].label1 + " " + data.question[i].label2 + "</div>" + "</li>";
        }

        // output+="</ul>";
        output+="</div>";
        document.getElementsByClassName("test").innerHTML = output;
        console.log(output);
        $('input').styler();
    });
    */

    /*получаем количество вопросов*/
    var questionLength = $('.question').length;

    /*создаем блок для вопросов*/
    $('.container').append('<div class="box-answer">');
    $('.box-answer').append('<ul class="col-answer">');
    $('.col-answer').append('<li><a class="passingDashboard__question"></a></li>');


    $.fn.duplicate = function(questionLength, cloneEvents) {
        var tmp = [];
        for ( var i = 0; i < questionLength; i++ ) {
            $.merge( tmp, this.clone( cloneEvents ).get() );
        }
        return this.pushStack( tmp );
    };

    $('.col-answer li') // - выберем элемент(ы) для клонирования
        .duplicate(questionLength-1) // - произведем нужное количество копий
        .appendTo('.col-answer'); // - вставим копии в нужное место

    /*создаем дата-атрибут точкам с именем и добавляем индекс к имени*/
    $('.passingDashboard__question').each(function (i) {
        var indexPassing = $(this).index('.passingDashboard__question');
        $(this).attr("data-answer","answer"+ indexPassing);
        // $(this).attr("href","#answer"+ indexPassing);
    });

    /*создаем дата-атрибут вопросам и добавляем индекс к имени*/
    $('.question').each(function () {
        var indexQuestion = $(this).index('.question');
        $(this).attr("data-quest","answer"+ indexQuestion);
    });

    /*Собитые на change блока question*/

    $('.question').each(function () {
        $(this).on('change', 'input, select', changeInput);
    });

    /*Собитые на click блока question*/

    $('.question').each(function () {
        $(this).on('click', 'input, textarea', clickInput);
    });

    /*---start fn clickInput---*/
    function clickInput() {
        var _this = this;
        $(_this).val().trim();
        var clickAttrName = $(_this).attr('name');

        if(this.focus){
            $('.passingDashboard__question[data-answer="' + clickAttrName +'"]').addClass('checked');
        } else {

        }
    }
    /*---end fn changeInput---*/

    /*---start fn changeInput---*/
    function changeInput() {
        var _this = this;
        var changeAttrName = $(_this).attr('name');

        if(this.checked || this.focus){
            $('.passingDashboard__question[data-answer="' + changeAttrName +'"]').addClass('checked');

        } else {

        }

    }
    /*---end fn changeInput---*/

    /*--- go to question  ---*/
    $('.col-answer').on('click', "a", function(event){
        event.preventDefault();
        var idPoint  = $(this).attr('data-answer');
        var attrQuest = $('.question[data-quest="' + idPoint +'"]');
        var attrQuestTop = $(attrQuest).offset().top - 100;

        $('body,html').animate({scrollTop: attrQuestTop}, 1500);
    });

    $('.col-answer li a').click(function () {
        $('.passingDashboard__question').removeClass('active');
        $(this).addClass('active');
    });




    // $(window).scroll(function() {
    //     console.log(this);
    //     var masTitleHeight = [];
    //
    //     $('.title-question').each(function () {
    //
    //         var titleHeight = $(this).offset().top;
    //         masTitleHeight.push(titleHeight);
    //
    //
    //         // if($(window).scrollTop() >= masTitleHeigh[1]) {
    //         //     // $('.title-question').eq(1).css('opacity', .4);
    //         //     console.log($('.title-question').eq(1));
    //         // }
    //     });
    //
    // });




    // console.log(masTitleHeight);


    // $("body").scrollTop();


        // var masAttrQuest = [];
        // var mashightQuest = [];
        // var attrQuest;

        /*$('.question[data-quest]').each(function () {
            var attrQuest  = $(this).attr('data-quest');
            var hightQquestion = $(this).offset().top;
            masAttrQuest.push(attrQuest);
            mashightQuest.push(hightQquestion);

            // console.log(attrQuest);
            // console.log($(this).scrollTop());
            // if($(window).scrollTop()== hightQquestion) {
            //     $('.passingDashboard__question[data-answer="' + attrQuest +'"]').addClass('active');
            // }

            // console.log($(attrQuest));
        });*/
    
        // console.log(masAttrQuest);
        // console.log(mashightQuest);
        // if ( $(window).scrollTop() >= 150 ){                   // ставим условие
        //     $('#div_to_fixed').css('position','fixed');         // определяем действие
        // }



    /*$(window).scroll(function() {
        var top_scroll = $(this).scrollTop();
        // console.log($(mas).eq(1));
        // console.log(top_scroll);
        console.log(mashightQuest[0]);
        if(top_scroll <= mashightQuest[0]) {
            console.log("1");
            $('.passingDashboard__question[data-answer="' + masAttrQuest[0] +'"]').addClass('next');
            // if_max_width = true;
            // $('.blocks').css('width', 500);
        } else {
            console.log("2");
            $('.passingDashboard__question[data-answer="' + masAttrQuest[0] +'"]').removeClass('next');
        }

        if(top_scroll >= mashightQuest[0]) {
            // console.log("2");
            $('.passingDashboard__question[data-answer="' + masAttrQuest[1] +'"]').addClass('next');
        } else {
            $('.passingDashboard__question[data-answer="' + masAttrQuest[1] +'"]').removeClass('next');
        }

        // if(top_scroll <= mashightQuest[1]) {
        //     // console.log("2");
        //     $('.passingDashboard__question[data-answer="' + masAttrQuest[2] +'"]').addClass('next');
        // } else {
        //     $('.passingDashboard__question[data-answer="' + masAttrQuest[2] +'"]').removeClass('next');
        // }
    });*/

    /* start fields contacts*/

    var btnSubmit = $(".btn-submit");
    var mail = $("#mail-id");
    var name = $("#name-id");

    /* reg_exp*/
    var reg_name=/^[0-9A-Z][A-Z0-9-_\.]{2,10}$/i;
    var reg_mail=/^([a-zA-Z0-9_]{3,10})@([a-zA-Z0-9]{1,10})\.(?:[a-zA-Z0-9-]{2,5})$/i;

    /* valid field mail*/
    mail.blur(function(){
        if(mail.val() != ''){
            if(mail.val().search(reg_mail) == 0){
                $('#valid-mail').text('ОК').css('color', 'green');
                $(btnSubmit).attr('disabled', false);
                mail.removeClass('error').addClass('ok');
            }else{
                $('#valid-mail').text('Ошибка').css('color', 'red');
                $(btnSubmit).attr('disabled', true);
                mail.addClass('error');
            }
        }else{
            $('#valid-mail').text('Введите e-mail!').css('color', 'red');
            mail.addClass('error');
            $(btnSubmit).attr('disabled', true);
        }
    });

    /* valid field name*/
    name.blur(function(){
        if(name.val() != ''){
            if(name.val().search(reg_name) == 0){
                $('#valid-name').text('ОК').css('color', 'green');
                $(btnSubmit).attr('disabled', false);
                name.removeClass('error').addClass('ok');
            }else{
                $('#valid-name').text('Ошибка').css('color', 'red');
                $(btnSubmit).attr('disabled', true);
                name.addClass('error');
            }
        }else{
            $('#valid-name').text('Введите Имя!').css('color', 'red');
            name.addClass('error');
            $(btnSubmit).attr('disabled', true);
        }
    });
    /* end fields contacts*/


    $('.input-area-err').hide();
    $('.js-loader').hide();

    // Добавить скрытые поля - описание к ответам в форме
    $('ul.question').each(function (index, el) {
        var descr = $(el).find('p').text();
        var name = $(el).find('input').attr('name');
        $(el).prepend('<input type="hidden" name="'+ name +'_descr" value="'+ descr +'">');
    });

    $('.btn-submit').click(function () {
        $('ul.question').find('p').removeClass('field-err');

        var isOK = true;

        $('ul.question').each(function (index, el) {
            if (!$(el).find('input:checked').length) {
                $(this).find('p').addClass('field-err');
                isOK = false;
            }
            /*
             var nameRadio = el.name;
             if (!nameRadio.checked) {
                $(this).parent().parent().parent().parent().parent().find('h2').addClass('field-err');
             }
             */
        });

        if (!isOK) { return false; }

        /*
         $(':radio[name]').each(function () {
            var nameRadio = this.name;
            if (nameRadio.checked) {
                $(this).parent().parent().parent().parent().parent().find('h2').removeClass('field-err');
            }
         });
         */

        $('.js-send').hide(); $('.js-loader').show(); // show loader
        // send to backend (for subsribe, send mail...)

        var $form = $(this);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function() {
            console.log('success');
            // $('#idForm')[0].reset();
            // $('.box-question .jq-radio').removeClass('checked');
            // $('.passingDashboard__question.checked').removeClass('checked');
            $('#name-id').removeClass('ok');
            $('#mail-id').removeClass('ok');
            $('#valid-name').text('');
            $('#valid-mail').text('');
            // $('.box-fields .jq-selectbox').removeClass('changed');
            // $('select').trigger('refresh');
            // console.log($('input[type="submit"]'));

        }).fail(function() {
            console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault();
    });



});