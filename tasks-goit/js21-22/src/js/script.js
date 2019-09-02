const questionsAndAnswers = {
    questions: [
        {
            questionNumber: 1,
            question: 'Чему равен this в функциях вызванных на глобальном уровне (т.е. не внутри других функций)',
            answer1: 'Сама функция',
            answer2: 'window',
            answer3: 'undefined',
            answer4: 'null',
            correctAnswer: 'undefined'
        },
        {
            questionNumber: 2,
            question: 'Какие основное ограничения к объявлению переменных в строгом режиме?',
            answer1: 'Переменные функций должны объявляться с использованием ключевого слова var',
            answer2: 'Название переменных должно быть camel-case с маленькой буквы',
            answer3: 'Любая переменная должна объявляться с использованием ключевого слова var',
            answer4: 'Глобальные переменные должны объявляться с использованием ключевого слова var',
            correctAnswer: 'Любая переменная должна объявляться с использованием ключевого слова var'
        },
        {
            questionNumber: 3,
            question: 'Для чего используется конструкция try-catch в javascript?',
            answer1: 'Для генерирования ошибок',
            answer2: 'Для замены условного оператора if',
            answer3: 'Для обработки возможных ошибок',
            answer4: 'В строгом режиме весь код необходимо оборачивать в try-catch',
            correctAnswer: 'Для обработки возможных ошибок'
        }
    ]
};


localStorage.setItem('questionsAndAnswers', JSON.stringify(questionsAndAnswers));
let test = localStorage.getItem('questionsAndAnswers');
test = JSON.parse(test);

$(function () {

    // HANDLEBARS -->
    const source = $('#test-template').html();
    const template = Handlebars.compile(source);
    const html = template(questionsAndAnswers);

    $('#content').html(html);
    // <-- HANDLEBARS //

    // CHECK USER'S ANSWERS
    const usersAnswers = [];
    const correctAnswers = [];
    let score = 0;

    // add correct answers to the array
    const addCorrectAnswers = () => {
        let i = 0;
        const questionsNumber = questionsAndAnswers.questions.length;

        for (i; i < questionsNumber; i++) {
            let correctAnswer = questionsAndAnswers.questions[i].correctAnswer;
            correctAnswers.push(correctAnswer);
        }
    }

    // add user's answers to the array
    const addUsersAnswers = () => {
        $('.answers input:checked').each(function() {
            usersAnswers.push( $(this).attr('value') );
        })
    }

    //show modal
    const showSuccessModal = () => {
        $('#modal').show();
        $('#notification').html('<p class="success">Congrats! The test is passed!</p>');
    }

    const showFailModal = () => {
        $('#modal').show();
        $('#notification')
            .html('<p class="fail">The test is failed!</p>')
    }

    // close modal
    const closeModal = () => {
        $('#modal').hide();
    }

    // clear checkboxes
    const clearCheckboxes = () => {
        score = 0;

        $('.answers input:checked').each(function () {
            $(this).attr('checked', false);
            usersAnswers.pop();
        })
    }

    // check the user's answer to each question with the correct answers
    const checkAnswers = () => {

        addUsersAnswers();

        let i = 0;
        const length = correctAnswers.length;

        for (i; i < length; i++) {
            if (usersAnswers[i] == correctAnswers[i]) {
                score++;
            }
        }

        if (score == length) {
            $('.answers input:checked').each(function() {
            });
            showSuccessModal();
        } else {
            showFailModal();
        }
    }

    addCorrectAnswers();

    $('#check-answers').on('click', function(e) {
        e.preventDefault();
        checkAnswers();
        clearCheckboxes();
    });

    $('#modal').click(closeModal);
});