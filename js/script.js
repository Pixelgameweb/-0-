//Массив с вопросами, вариантами ответов и правильными ответами
let questions = [
    {
        question:"Какой язык программирования вы изучаете",
        options:["JavaScript", "Python", "Java", "C++"  ],
        correсtAnswer: "JavaScript"
    },
    {
        question:"Что такое HTML",
        options:["Язык разметки", "Язык програмирования", "База данных", "Видеоредактор"  ],
        correсtAnswer: "Язык разметки"
    },
    {
        question:"Что такое CSS",
        options:["Каскадные таблицы стилей", "Язык програмирования", "База данных", "Библиотека"  ],
        correctAnswer: "Каскадные таблицы стилей"
    }
]
let currentQuestion = 0 ;// Текущий вопрос
let correctAnswers = 0 ;// Количество правильных ответов

// Функция для отображения  текущего вопроса и вариантов ответов  
function displayQuestion( ) {
    let questionElement = document.getElementById("question"); // Получить блок для размещения вопроса
    // Размещаем вопрос на странице
    questionElement.textContent = ` Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    let optionsElement = document.getElementById("options"); // Получить блок для размещения кнопок
    optionsElement.innerHTML = ""; //Очищаем содержимое блока optionsElement   
    
    //Получить массив ответов 
    let optionsArray = questions[currentQuestion].options;

    //Создать кнопки с вариантами ответов и привязать к ним функцию перехода к следующему вопросу
    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElement.append(button);
        button.textContent = option;
        button.classList.add('question_btn');
    })

}

displayQuestion();

