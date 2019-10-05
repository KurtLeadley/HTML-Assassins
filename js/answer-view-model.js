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
        "AnswerFour",
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
        "AnswerOne",
        "",
        "",
        true 
    )
];
function AnswerViewModel() {
    var self = this;
    self.QuestionNum = ko.observable("");
    self.QuestionText = ko.observable("");
    self.Answer1 = ko.observable("");
    self.Answer2 = ko.observable("");
    self.Answer3 = ko.observable("");
    self.Answer4 = ko.observable("");
    self.CorrectAnswer = ko.observable("");
    self.UserAnswer = ko.observable("");
    self.IsCorrect = ko.observable("");
    self.Display = ko.observable("");

    var Question = {
        QuestionNum : self.QuestionNum,
        QuestionText : self.Question,
        Answer1 : self.Answer1,
        Answer2 : self.Answer2,
        Answer3 : self.Answer3,
        Answer4: self.Answer4,
        CorrectAnswer : self.CorrectAnswer,
        UserAnswer : self.UserAnswer,
        IsCorrect : self.IsCorrect,
        Display : self.Display
    };
    self.Question = ko.observable();
    self.Questions = ko.observableArray(questionList);

    self.selectAnswer = function(Question, event) {       
        $('#answer-one-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-two-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-three-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-four-q'+Question.QuestionNum).removeClass('q-selected-answer');
        Question.UserAnswer = event.target.id;
        var answerId = Question.UserAnswer;
        var answer = Question.UserAnswer;
        answer = answer.split('-q');
        answer = answer[0];
        switch(answer) {
            case "answer-one" :
                answer = "AnswerOne";
                break;
            case "answer-two" :
                answer = "AnswerTwo";
                break;
            case "answer-three" :
                answer = "AnswerThree";
                break;
            case "answer-four" :
                answer = "AnswerFour";
                break;
        } 
        Question.UserAnswer = answer;
        var qNum = Question.QuestionNum;
        console.log(Question);
        if (Question.UserAnswer === Question.CorrectAnswer) {
            Question.IsCorrect = true;
            console.log('correct');
        } else {
            Question.IsCorrect = false;
            console.log('incorrect');
        }
        Question.Display = false;
        $('#q-tab-'+qNum).addClass('q-tab-answered');
        $('#'+answerId).addClass('q-selected-answer');

        for (var i=0; i <questionList.length; i++) {
            var answered = questionList[i].UserAnswer;
            if((!answered) || (answered === '')) {
                $('#submit').hide();
                break;
            }
            $('#submit').show();
        }
    }
    self.restart = function() {
        for (var i=0; i <=10 ; i++) {
            $('#submit').hide();
            $('#answer-one-q'+i).removeClass('q-selected-answer');
            $('#answer-two-q'+i).removeClass('q-selected-answer');
            $('#answer-three-q'+i).removeClass('q-selected-answer');
            $('#answer-four-q'+i).removeClass('q-selected-answer');
        }
        for (var i=1; i<=10; i++) {
            $('#q-tab-'+i).removeClass('q-tab-answered q-tab-correct q-tab-incorrect');
        }
        for (var i=0; i <questionList.length; i++) {
            questionList[i].IsCorrect='';
            questionList[i].UserAnswer='';
            console.log(questionList[i]);
        }
    }
    self.submit = function() {
        var correct = 0;
        for (var i=0; i <questionList.length; i++) {
            id = i+1;
            var answer = questionList[i].IsCorrect;
            console.log(answer);
            if (answer === true) {
                correct++;
                $('#q-tab-'+id).addClass('q-tab-correct');
            }
            if (answer === false) {
                $('#q-tab-'+id).addClass('q-tab-incorrect');
            }
            console.log(correct);
        }
    } 
}
ko.applyBindings(new AnswerViewModel());