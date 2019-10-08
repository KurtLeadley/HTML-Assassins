/*
==============================================
; Title:  HTML-Assassins Quiz
; Authors: Kurt Leadley, Karie Funk, Wendy Portillo 
; Date:   October 7th, 2019
; Description: Data model and Question object constructor
==============================================
*/
//
// Model

// Question constructor function | https://www.w3schools.com/js/js_object_constructors.asp
function Question(questionNum,question,a1,a2,a3,a4,correctA,userA,isCorrect) {
    this.questionNum = questionNum;
    this.question = question;
    this.a1 = a1;
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
    this.correctAnswer = correctA;
    this.userAnswer = userA;
    this.isCorrect = isCorrect
}
// an array of Question objects
// userA, isCorrect are determined by QuizViewModel
var questionList = [
    new Question(
        1,
        "#1 What does js stand for?",
        "jQuery Script",
        "Java Serialized",
        "JSONScript",
        "JavaScript",
        "answer-four",
        "",
        ""
    ),
    new Question(
        2,
        "#2 How do you push a value to an array?",
        "array.push(value);",
        "push[array,value];",
        "array_push(array,value);",
        "array.push[value];",
        "answer-one",
        "",
        ""
    ),
    new Question(
        3,
        "#3 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    ),
    new Question(
        4,
        "#4 Which of these is correct?",
        "var i = 6;",
        "$i = 6;",
        "var i:6;",
        "6 = var i;",
        "answer-one",
        "",
        ""
    ),
    new Question(
        5,
        "#5 How do you create a new object literal?",
        "var myObject = [];",
        "New Object = {}",
        "var myObject = {};",
        "var Object = [];",
        "answer-three",
        "",
        ""
    ),
    new Question(
        6,
        "#6 How do you split a string into an array?",
        "var array = str.explode('arg');",
        "var array = str.split['arg'];",
        "var array = explode(str, arg);",
        "var array = str.split('arg');",
        "answer-four",
        "",
        ""
    ),
    new Question(
        7,
        "#7 Which of these is correct?",
        "var product = 4 * 5;",
        "product = '4' x '5';",
        "var product = '6' * '5'",
        "var product = 4 x 5;",
        "answer-one",
        "",
        ""
    ),
    new Question(
        8,
        "#8 Which of these does not belong to Prototype String ?",
        "charAt()",
        "search()",
        "slice();",
        "keys();",
        "answer-four",
        "",
        ""
    ),
    new Question(
        9,
        "#9 Which of these does not belong to Prototype Array?",
        "includes()",
        "trim()",
        "push()",
        "pop()",
        "answer-two",
        "",
        ""
    ),
    new Question(
        10,
        "#10 Which correctly creates a new date?",
        "var d = new Date();",
        "Date date = new Date();",
        "new Date = Date()",
        "$date=date_create();",
        "answer-one",
        "",
        ""
    )
];