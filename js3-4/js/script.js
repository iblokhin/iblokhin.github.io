var doc = document;

var test = {
    header: 'Тест по программированию',
    question: ['Вопрос №1' , 'Вопрос №2' ,' Вопрос №3'],
    checkboxName: ['one' , 'two' , 'three' , 'four' , 'five' , 'six' , 'seven' ,'eight','nine'],
    id: ['1' , '2' , '3' , '4' , '5' , '6' , '7' ,'8','9'],
    answer: ['Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3',
            'Вариант ответа №1','Вариант ответа №2', 'Вариант ответа №3'],
    submit: 'Проверить мои результаты'
};

var n = 0;

var header = doc.createElement ('h3');
    header.innerHTML = test.header;

var form = doc.createElement( 'form');
    form.action = '#';
    form.method = 'post';
    form.classList.add ('form-group');

var list = doc.createElement ('ol');
    list.classList.add ('list-group');

var parent = doc.body;

var container = doc.createElement ('div');
    container.classList.add ('container');

var button = doc.createElement ('button');
    button.classList.add ('btn');
    button.classList.add ('btn-default');
    button.type = 'submit';
    button.innerHTML = test.submit;

container.appendChild (header);
parent.appendChild (container);
container.appendChild (form);
form.appendChild (list);

for (var i = 0; i < test.question.length; i++) {
    var listItem = doc.createElement ('li');
        listItem.classList.add = 'list-group-item';

        list.appendChild (listItem);

    var question = doc.createElement ('h4');
        question.innerHTML = test.question [i];

    listItem.appendChild (question);

for (var j = 0; j < 3; j++) {
    var checkbox = doc.createElement ('input');
        checkbox.type = 'checkbox';
        checkbox.name = test.checkboxName [n];
        checkbox.id = test.id [n];

    var answer = doc.createElement ('p');

    var label = doc.createElement ('label');
        label.htmlFor = test.id [n];

    label.appendChild (doc.createTextNode(test.answer [n]));
    listItem.appendChild (answer);
    answer.appendChild (checkbox);
    answer.appendChild (label);
    n++;
    }
}

form.appendChild (button);