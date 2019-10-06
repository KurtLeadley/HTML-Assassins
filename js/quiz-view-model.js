//
// ViewModel
function QuizViewModel() {

    var self = this;

    self.Question = ko.observable();
    self.Questions = ko.observableArray(questionList);
    //
    // answer selection function
    self.selectAnswer = function(Question, event) {       
        $('#answer-one-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-two-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-three-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-four-q'+Question.questionNum).removeClass('q-selected-answer');
        Question.userAnswer = event.target.id;
        var answerId = Question.userAnswer;
        var answer = answerId.split('-q')[0];
        Question.userAnswer = answer;
        var qNum = Question.questionNum;
        $("#q-tab-"+qNum).removeClass('q-tab-active');
        console.log(Question);
        if (Question.userAnswer === Question.correctAnswer) {
            Question.isCorrect = true;
            console.log('correct');
        } else {
            Question.isCorrect = false;
            console.log('incorrect');
        }
        $('#q-tab-'+qNum).addClass('q-tab-answered');
        $('#'+answerId).addClass('q-selected-answer');
        
        for (var i=0; i <questionList.length; i++) {
            var answered = questionList[i].userAnswer;
            var divNum = i +1;
            $("#q-tab-"+divNum).removeClass('q-tab-active');
            if(!answered) {
                $('#q'+qNum).hide();
                $('#q'+divNum).show().css("display","grid");
                $("#q-tab-"+divNum).addClass('q-tab-active');
                $('#submit').hide();
                break;
            }
            $('#submit').show();
        }
    }
    //
    // restart function 
    self.restart = function() {
        for (var i=1; i <=10 ; i++) {
            $('#answer-one-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-two-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-three-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-four-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#q-tab-'+i).removeClass('q-tab-answered q-tab-correct q-tab-incorrect q-tab-active');
            $('#q'+i).hide();
        }
        for (var i=0; i <questionList.length; i++) {
            questionList[i].isCorrect='';
            questionList[i].userAnswer='';
        }
        $('#submit').hide();
        $('#results-container').hide();
        $('#results-score').text('');
        $('#results-score-percentage').text('');
        $('#results-rank').text('');
        $('#q1').show().css("display","grid");
        $("#q-tab-1").addClass('q-tab-active');
    }
    //
    // submit function
    self.submit = function() {
        var numCorrect = 0;
        for (var i=0; i <questionList.length; i++) {
            id = i+1;
            var isCorrect = questionList[i].isCorrect;
            var questionNum = questionList[i].questionNum;
            var correctAnswer = questionList[i].correctAnswer;
            var userAnswer = questionList[i].userAnswer;
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
            $('#results-container').show().css("display","grid");
            $('#results-score').text(numCorrect+" out of " + questionList.length+ " correct");
            $('#results-score-percentage').text("Score: "+ percentage+"%");
            $('#results-rank').text("Your Rank is: " +rank);
            // for some reason, looping to hide here was causing issues
            $('#q1').hide();
            $('#q2').hide();
            $('#q3').hide();
            $('#q4').hide();
            $('#q5').hide();
            $('#q6').hide();
            $('#q7').hide();
            $('#q8').hide();
            $('#q9').hide();
            $('#q10').hide();
        }
    }
}
ko.applyBindings(new QuizViewModel());