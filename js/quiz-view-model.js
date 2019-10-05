//
// ViewModel
function QuizViewModel() {

    var self = this;

    self.Question = ko.observable();
    self.Questions = ko.observableArray(questionList);
    //
    // answer selection function
    self.selectAnswer = function(Question, event) {       
        $('#answer-one-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-two-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-three-q'+Question.QuestionNum).removeClass('q-selected-answer');
        $('#answer-four-q'+Question.QuestionNum).removeClass('q-selected-answer');
        Question.UserAnswer = event.target.id;
        var answerId = Question.UserAnswer;
        var answer = answerId.split('-q')[0];
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
            if(!answered) {
                $('#submit').hide();
                break;
            }
            $('#submit').show();
        }
    }
    //
    // restart function 
    self.restart = function() {
        for (var i=0; i <=10 ; i++) {
            $('#submit').hide();
            $('#answer-one-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-two-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-three-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-four-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
        }
        for (var i=1; i<=10; i++) {
            $('#q-tab-'+i).removeClass('q-tab-answered q-tab-correct q-tab-incorrect');
        }
        for (var i=0; i <questionList.length; i++) {
            questionList[i].IsCorrect='';
            questionList[i].UserAnswer='';
        }
        $('#results-container').hide();
        $('#results-score').text('');
        $('#results-score-percentage').text('');
        $('#results-rank').text('');
    }
    //
    // submit function
    self.submit = function() {
        var numCorrect = 0;
        for (var i=0; i <questionList.length; i++) {
            id = i+1;
            var isCorrect = questionList[i].IsCorrect;
            var questionNum = questionList[i].QuestionNum;
            var correctAnswer = questionList[i].CorrectAnswer;
            var userAnswer = questionList[i].UserAnswer;
            if (isCorrect === true) {
                numCorrect++;
                $('#q-tab-'+id).addClass('q-tab-correct');
                $('#'+correctAnswer+'-q'+questionNum).addClass('q-tab-correct');
            }
            if (isCorrect === false) {
                $('#q-tab-'+id).addClass('q-tab-incorrect');
                $('#'+userAnswer+'-q'+questionNum).addClass('q-tab-incorrect');
                $('#'+correctAnswer+'-q'+questionNum).addClass('q-tab-correct');
            }
            var percentage = (numCorrect / questionList.length) * 100;
            if (percentage >= 80) {
                var rank = "Expert";
            }
            if ((percentage >= 60) && (percentage < 80)) {
                var rank = "Novice";
            }
            if (percentage < 60) {
                var rank = "Beginner";
            }
            $('#submit').hide();
            $('#results-container').show();
            $('#results-score').text(numCorrect+" out of " + questionList.length+ " correct");
            $('#results-score-percentage').text("Score: "+ percentage+"%");
            $('#results-rank').text("Your Rank is: " +rank);
        }
    } 
}
ko.applyBindings(new QuizViewModel());