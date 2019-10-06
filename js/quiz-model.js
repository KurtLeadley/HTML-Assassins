//
// Model

// Question constructor function
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
        "#5 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    ),
    new Question(
        6,
        "#6 How do you push a value to an array?",
        "array.push(value);",
        "push[array,value];",
        "array_push(array,value);",
        "array.push[value];",
        "answer-one",
        "",
        ""
    ),
    new Question(
        7,
        "#7 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    ),
    new Question(
        8,
        "#8 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    ),
    new Question(
        9,
        "#9 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    ),
    new Question(
        10,
        "#10 How do you print a message to the console?",
        "Logger.log();",
        "console.log();",
        "console.log[];",
        "Console.log();",
        "answer-two",
        "",
        ""
    )
];