'use strict';

var questionsAndAnswers = {
    questions: [{
        questionNumber: 1,
        question: 'Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)',
        answer1: 'Сама функция',
        answer2: 'window',
        answer3: 'undefined',
        answer4: 'null',
        correctAnswer: 'undefined'
    }, {
        questionNumber: 2,
        question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
        answer1: 'Переменные функций должны объявляться с использованием ключевого слова var',
        answer2: 'Название переменных должно быть camel-case с маленькой буквы',
        answer3: 'Любая переменная должна объявляться с использованием ключевого слова var',
        answer4: 'Глобальные переменные должны объявляться с использованием ключевого слова var',
        correctAnswer: 'Любая переменная должна объявляться с использованием ключевого слова var'
    }, {
        questionNumber: 3,
        question: 'Для чего используется конструкция try-catch в javascript?',
        answer1: 'Для генерирования ошибок',
        answer2: 'Для замены условного оператора if',
        answer3: 'Для обработки возможных ошибок',
        answer4: 'В строгом режиме весь код необходимо оборачивать в try-catch',
        correctAnswer: 'Для обработки возможных ошибок'
    }]
};

localStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));
var test = localStorage.getItem('questionsAndAnswers');
test = JSON.parse(test);

$(function () {

    // HANDLEBARS -->
    var source = $('#test-template').html();
    var template = Handlebars.compile(source);
    var html = template(questionsAndAnswers);

    $('#content').html(html);
    // <-- HANDLEBARS //

    // CHECK USER'S ANSWERS
    var usersAnswers = [];
    var correctAnswers = [];
    var score = 0;

    // add correct answers to the array
    var addCorrectAnswers = function addCorrectAnswers() {
        var i = 0;
        var questionsNumber = questionsAndAnswers.questions.length;

        for (i; i < questionsNumber; i++) {
            var correctAnswer = questionsAndAnswers.questions[i].correctAnswer;
            correctAnswers.push(correctAnswer);
        }
    };

    // add user's answers to the array
    var addUsersAnswers = function addUsersAnswers() {
        $('.answers input:checked').each(function () {
            usersAnswers.push($(this).attr('value'));
        });
    };

    //show modal
    var showSuccessModal = function showSuccessModal() {
        $('#modal').show();
        $('#notification').html('<p class="success">Congrats! The test is passed!</p>');
    };

    var showFailModal = function showFailModal() {
        $('#modal').show();
        $('#notification').html('<p class="fail">The test is failed!</p>');
    };

    // close modal
    var closeModal = function closeModal() {
        $('#modal').hide();
    };

    // clear checkboxes
    var clearCheckboxes = function clearCheckboxes() {
        score = 0;

        $('.answers input:checked').each(function () {
            $(this).attr('checked', false);
            usersAnswers.pop();
        });
    };

    // check the user's answer to each question with the correct answers
    var checkAnswers = function checkAnswers() {

        addUsersAnswers();

        var i = 0;
        var length = correctAnswers.length;

        for (i; i < length; i++) {
            if (usersAnswers[i] == correctAnswers[i]) {
                score++;
            }
        }

        if (score == length) {
            $('.answers input:checked').each(function () {});
            showSuccessModal();
        } else {
            showFailModal();
        }
    };

    addCorrectAnswers();

    $('#check-answers').on('click', function (e) {
        e.preventDefault();
        checkAnswers();
        clearCheckboxes();
    });

    $('#modal').click(closeModal);
});
//# sourceMappingURL=data:application/json;base64,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Q0EsWUFBTSxTQUFTLGVBQWUsTUFBOUI7O0FBRUEsYUFBSyxDQUFMLEVBQVEsSUFBSSxNQUFaLEVBQW9CLEdBQXBCLEVBQXlCO0FBQ3JCLGdCQUFJLGFBQWEsQ0FBYixLQUFtQixlQUFlLENBQWYsQ0FBdkIsRUFBMEM7QUFDdEM7QUFDSDtBQUNKOztBQUVELFlBQUksU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLGNBQUUsd0JBQUYsRUFBNEIsSUFBNUIsQ0FBaUMsWUFBVyxDQUMzQyxDQUREO0FBRUE7QUFDSCxTQUpELE1BSU87QUFDSDtBQUNIO0FBQ0osS0FwQkQ7O0FBc0JBOztBQUVBLE1BQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBUyxDQUFULEVBQVk7QUFDeEMsVUFBRSxjQUFGO0FBQ0E7QUFDQTtBQUNILEtBSkQ7O0FBTUEsTUFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixVQUFsQjtBQUNILENBNUZEIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHF1ZXN0aW9uc0FuZEFuc3dlcnMgPSB7XHJcbiAgICBxdWVzdGlvbnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uTnVtYmVyOiAxLFxyXG4gICAgICAgICAgICBxdWVzdGlvbjogJ9Cn0LXQvNGDINGA0LDQstC10L0gdGhpcyDQsiDRhNGD0L3QutGG0LjRj9GFINCy0YvQt9Cy0LDQvdC90YvRhSDQvdCwINCz0LvQvtCx0LDQu9GM0L3QvtC8INGD0YDQvtCy0L3QtSAo0YIu0LUuINC90LUg0LLQvdGD0YLRgNC4INC00YDRg9Cz0LjRhSDRhNGD0L3QutGG0LjQuSknLFxyXG4gICAgICAgICAgICBhbnN3ZXIxOiAn0KHQsNC80LAg0YTRg9C90LrRhtC40Y8nLFxyXG4gICAgICAgICAgICBhbnN3ZXIyOiAnd2luZG93JyxcclxuICAgICAgICAgICAgYW5zd2VyMzogJ3VuZGVmaW5lZCcsXHJcbiAgICAgICAgICAgIGFuc3dlcjQ6ICdudWxsJyxcclxuICAgICAgICAgICAgY29ycmVjdEFuc3dlcjogJ3VuZGVmaW5lZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb25OdW1iZXI6IDIsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn0JrQsNC60LjQtSDQvtGB0L3QvtCy0L3QvtC1INC+0LPRgNCw0L3QuNGH0LXQvdC40Y8g0Log0L7QsdGK0Y/QstC70LXQvdC40Y4g0L/QtdGA0LXQvNC10L3QvdGL0YUg0LIg0YHRgtGA0L7Qs9C+0Lwg0YDQtdC20LjQvNC1PycsXHJcbiAgICAgICAgICAgIGFuc3dlcjE6ICfQn9C10YDQtdC80LXQvdC90YvQtSDRhNGD0L3QutGG0LjQuSDQtNC+0LvQttC90Ysg0L7QsdGK0Y/QstC70Y/RgtGM0YHRjyDRgSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INC60LvRjtGH0LXQstC+0LPQviDRgdC70L7QstCwIHZhcicsXHJcbiAgICAgICAgICAgIGFuc3dlcjI6ICfQndCw0LfQstCw0L3QuNC1INC/0LXRgNC10LzQtdC90L3Ri9GFINC00L7Qu9C20L3QviDQsdGL0YLRjCBjYW1lbC1jYXNlINGBINC80LDQu9C10L3RjNC60L7QuSDQsdGD0LrQstGLJyxcclxuICAgICAgICAgICAgYW5zd2VyMzogJ9Cb0Y7QsdCw0Y8g0L/QtdGA0LXQvNC10L3QvdCw0Y8g0LTQvtC70LbQvdCwINC+0LHRitGP0LLQu9GP0YLRjNGB0Y8g0YEg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LXQvCDQutC70Y7Rh9C10LLQvtCz0L4g0YHQu9C+0LLQsCB2YXInLFxyXG4gICAgICAgICAgICBhbnN3ZXI0OiAn0JPQu9C+0LHQsNC70YzQvdGL0LUg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LTQvtC70LbQvdGLINC+0LHRitGP0LLQu9GP0YLRjNGB0Y8g0YEg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40LXQvCDQutC70Y7Rh9C10LLQvtCz0L4g0YHQu9C+0LLQsCB2YXInLFxyXG4gICAgICAgICAgICBjb3JyZWN0QW5zd2VyOiAn0JvRjtCx0LDRjyDQv9C10YDQtdC80LXQvdC90LDRjyDQtNC+0LvQttC90LAg0L7QsdGK0Y/QstC70Y/RgtGM0YHRjyDRgSDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INC60LvRjtGH0LXQstC+0LPQviDRgdC70L7QstCwIHZhcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcXVlc3Rpb25OdW1iZXI6IDMsXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAn0JTQu9GPINGH0LXQs9C+INC40YHQv9C+0LvRjNC30YPQtdGC0YHRjyDQutC+0L3RgdGC0YDRg9C60YbQuNGPIHRyeS1jYXRjaCDQsiBqYXZhc2NyaXB0PycsXHJcbiAgICAgICAgICAgIGFuc3dlcjE6ICfQlNC70Y8g0LPQtdC90LXRgNC40YDQvtCy0LDQvdC40Y8g0L7RiNC40LHQvtC6JyxcclxuICAgICAgICAgICAgYW5zd2VyMjogJ9CU0LvRjyDQt9Cw0LzQtdC90Ysg0YPRgdC70L7QstC90L7Qs9C+INC+0L/QtdGA0LDRgtC+0YDQsCBpZicsXHJcbiAgICAgICAgICAgIGFuc3dlcjM6ICfQlNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INCy0L7Qt9C80L7QttC90YvRhSDQvtGI0LjQsdC+0LonLFxyXG4gICAgICAgICAgICBhbnN3ZXI0OiAn0JIg0YHRgtGA0L7Qs9C+0Lwg0YDQtdC20LjQvNC1INCy0LXRgdGMINC60L7QtCDQvdC10L7QsdGF0L7QtNC40LzQviDQvtCx0L7RgNCw0YfQuNCy0LDRgtGMINCyIHRyeS1jYXRjaCcsXHJcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXI6ICfQlNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INCy0L7Qt9C80L7QttC90YvRhSDQvtGI0LjQsdC+0LonXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxuXHJcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdxdWVzdGlvbnNBbmRBbnN3ZXJzJywgSlNPTi5zdHJpbmdpZnkocXVlc3Rpb25zQW5kQW5zd2VycykpO1xyXG5sZXQgdGVzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdxdWVzdGlvbnNBbmRBbnN3ZXJzJyk7XHJcbnRlc3QgPSBKU09OLnBhcnNlKHRlc3QpO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gSEFORExFQkFSUyAtLT5cclxuICAgIGNvbnN0IHNvdXJjZSA9ICQoJyN0ZXN0LXRlbXBsYXRlJykuaHRtbCgpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoc291cmNlKTtcclxuICAgIGNvbnN0IGh0bWwgPSB0ZW1wbGF0ZShxdWVzdGlvbnNBbmRBbnN3ZXJzKTtcclxuXHJcbiAgICAkKCcjY29udGVudCcpLmh0bWwoaHRtbCk7XHJcbiAgICAvLyA8LS0gSEFORExFQkFSUyAvL1xyXG5cclxuICAgIC8vIENIRUNLIFVTRVInUyBBTlNXRVJTXHJcbiAgICBjb25zdCB1c2Vyc0Fuc3dlcnMgPSBbXTtcclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJzID0gW107XHJcbiAgICBsZXQgc2NvcmUgPSAwO1xyXG5cclxuICAgIC8vIGFkZCBjb3JyZWN0IGFuc3dlcnMgdG8gdGhlIGFycmF5XHJcbiAgICBjb25zdCBhZGRDb3JyZWN0QW5zd2VycyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rpb25zTnVtYmVyID0gcXVlc3Rpb25zQW5kQW5zd2Vycy5xdWVzdGlvbnMubGVuZ3RoO1xyXG5cclxuICAgICAgICBmb3IgKGk7IGkgPCBxdWVzdGlvbnNOdW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uc0FuZEFuc3dlcnMucXVlc3Rpb25zW2ldLmNvcnJlY3RBbnN3ZXI7XHJcbiAgICAgICAgICAgIGNvcnJlY3RBbnN3ZXJzLnB1c2goY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCB1c2VyJ3MgYW5zd2VycyB0byB0aGUgYXJyYXlcclxuICAgIGNvbnN0IGFkZFVzZXJzQW5zd2VycyA9ICgpID0+IHtcclxuICAgICAgICAkKCcuYW5zd2VycyBpbnB1dDpjaGVja2VkJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdXNlcnNBbnN3ZXJzLnB1c2goICQodGhpcykuYXR0cigndmFsdWUnKSApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9zaG93IG1vZGFsXHJcbiAgICBjb25zdCBzaG93U3VjY2Vzc01vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICQoJyNtb2RhbCcpLnNob3coKTtcclxuICAgICAgICAkKCcjbm90aWZpY2F0aW9uJykuaHRtbCgnPHAgY2xhc3M9XCJzdWNjZXNzXCI+Q29uZ3JhdHMhIFRoZSB0ZXN0IGlzIHBhc3NlZCE8L3A+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0ZhaWxNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAkKCcjbW9kYWwnKS5zaG93KCk7XHJcbiAgICAgICAgJCgnI25vdGlmaWNhdGlvbicpXHJcbiAgICAgICAgICAgIC5odG1sKCc8cCBjbGFzcz1cImZhaWxcIj5UaGUgdGVzdCBpcyBmYWlsZWQhPC9wPicpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xvc2UgbW9kYWxcclxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgJCgnI21vZGFsJykuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNsZWFyIGNoZWNrYm94ZXNcclxuICAgIGNvbnN0IGNsZWFyQ2hlY2tib3hlcyA9ICgpID0+IHtcclxuICAgICAgICBzY29yZSA9IDA7XHJcblxyXG4gICAgICAgICQoJy5hbnN3ZXJzIGlucHV0OmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdjaGVja2VkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICB1c2Vyc0Fuc3dlcnMucG9wKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB0aGUgdXNlcidzIGFuc3dlciB0byBlYWNoIHF1ZXN0aW9uIHdpdGggdGhlIGNvcnJlY3QgYW5zd2Vyc1xyXG4gICAgY29uc3QgY2hlY2tBbnN3ZXJzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBhZGRVc2Vyc0Fuc3dlcnMoKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGNvcnJlY3RBbnN3ZXJzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChpOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVzZXJzQW5zd2Vyc1tpXSA9PSBjb3JyZWN0QW5zd2Vyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgc2NvcmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNjb3JlID09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcuYW5zd2VycyBpbnB1dDpjaGVja2VkJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNob3dTdWNjZXNzTW9kYWwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93RmFpbE1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZENvcnJlY3RBbnN3ZXJzKCk7XHJcblxyXG4gICAgJCgnI2NoZWNrLWFuc3dlcnMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNoZWNrQW5zd2VycygpO1xyXG4gICAgICAgIGNsZWFyQ2hlY2tib3hlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI21vZGFsJykuY2xpY2soY2xvc2VNb2RhbCk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
