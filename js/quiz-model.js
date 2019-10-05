//
// Model
function Question(questionNum,question,a1,a2,a3,a4,correctA,userA,isCorrect,display) {
    this.QuestionNum = questionNum;
    this.QuestionText = question;
    this.Answer1 = a1;
    this.Answer2 = a2;
    this.Answer3 = a3;
    this.Answer4 = a4;
    this.CorrectAnswer = correctA;
    this.UserAnswer = userA;
    this.IsCorrect = isCorrect
    this.Display = display;
}
var questionList = [
    new Question(
        1,
        "What does js stand for?",
        "jQuery Script",
        "Java Serialized",
        "JSONScript",
        "JavaScript",
        "answer-four",
        "",
        "",
        true
    ),
    new Question(
        2,
        "How do you push a value to an array?",
        "array.push(value);",
        "push[array,value];",
        "array_push(array,value);",
        "array.push[value];",
        "answer-one",
        "",
        "",
        true 
    )
];