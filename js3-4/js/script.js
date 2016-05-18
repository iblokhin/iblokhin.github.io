var doc = document;

var container = doc.createElement('div');
container.className = 'container';


var tests = {
    questions: ['Вопрос №1',
                'Вопрос №2',
                'Вопрос №3'],

    answers: ['Вариант ответа №1',
              'Вариант ответа №2',
              'Вариант ответа №3'],

    container: container,

    addHeader: function () {
        var header = doc.createElement('h3');
        header.innerHTML = 'Тест по программированию';
        this.container.appendChild(header);

        return header;
    },

    addList: function () {
        var list = doc.createElement('ol');
        for (var i = 0; i < this.questions.length; i++) {
            var listItem = doc.createElement('li');
            list.appendChild(listItem);
            this.container.appendChild(list);

            var question = doc.createElement('p');
            question.innerHTML = this.questions[i];
            listItem.appendChild(question);

            var answer = doc.createElement('ul');
            for (var j = 0; j < this.answers.length; j++) {
                var answersItem = doc.createElement('li');
                answer.appendChild(answersItem);
                listItem.appendChild(answer);
                answersItem.className = 'checkbox';

                var input = doc.createElement('input');
                input.setAttribute('type', 'checkbox');
                answersItem.appendChild(input);

                var textAnswer = doc.createElement('span');
                answersItem.appendChild(textAnswer);
                textAnswer.innerHTML = this.answers[j];
            }
        }
    },

    addButton: function () {
        var button = doc.createElement('button');
        button.className = 'btn btn-default';
        button.innerHTML = 'Проверить мои результаты';
        this.container.appendChild(button);

        return button;
    }
};

tests.addHeader();
tests.addList();
tests.addButton();
doc.body.appendChild(container);