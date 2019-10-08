/*
==============================================
; Title:  HTML-Assassins Quiz
; Authors: Kurt Leadley, Karie Funk, Wendy Portillo 
; Date:   October 7th, 2019
; Description: QuizViewModel: This file handles most of the UI and data model changes. 
; The q-tabs logic is handled in q-tab.js
==============================================
*/
//
// ViewModel
function QuizViewModel() {
    // change this to self
    var self = this;
    // observe Question objects | https://knockoutjs.com/documentation/observables.html
    self.Question = ko.observable();
    // observe our array of Question objects
    self.Questions = ko.observableArray(questionList);
    //
    // answer selection function
    self.selectAnswer = function(Question, event) {
        // someone just answered a question, clear answered class and update below       
        $('#answer-one-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-two-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-three-q'+Question.questionNum).removeClass('q-selected-answer');
        $('#answer-four-q'+Question.questionNum).removeClass('q-selected-answer');
        // grab the id of the answered question with event
        Question.userAnswer = event.target.id;
        // making it easier to read
        var answerId = Question.userAnswer;
        // getting part of thise string here |  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
        var answer = answerId.split('-q')[0];
        // this is our parsed answer that may or may not match the correctAnswer
        Question.userAnswer = answer;
        var qNum = Question.questionNum;
        $("#q-tab-"+qNum).removeClass('q-tab-active');
        // find out if the answer is correct or not and update our data model
        if (Question.userAnswer === Question.correctAnswer) {
            Question.isCorrect = true;
        } else {
            Question.isCorrect = false;
        }
        // we answered the question, let's let the CSS know
        $('#q-tab-'+qNum).addClass('q-tab-answered');
        $('#'+answerId).addClass('q-selected-answer');
        // loop through all our Question objects and find the first one that isn't answered
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
            // if we get through this loop unscathed, we answered all the questions, so show the submit button
            $('#submit').show();
        }
    }
    //
    // restart function 
    self.restart = function() {
        // someone clicked the restart button, clear out the CSS classes
        for (var i=1; i <=10 ; i++) {
            $('#answer-one-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-two-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-three-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#answer-four-q'+i).removeClass('q-selected-answer q-tab-correct q-tab-incorrect');
            $('#q-tab-'+i).removeClass('q-tab-answered q-tab-correct q-tab-incorrect q-tab-active');
            $('#q'+i).hide();
        }
        // clear out our variable data in our observed objects too
        for (var i=0; i <questionList.length; i++) {
            questionList[i].isCorrect='';
            questionList[i].userAnswer='';
        }
        // ui changes for clicking "restart"
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
    // someone clicked submit
    self.submit = function() {
        // set the score at 0
        var numCorrect = 0;
        // check all the question objects
        for (var i=0; i <questionList.length; i++) {
            id = i+1;
            var isCorrect = questionList[i].isCorrect;
            var questionNum = questionList[i].questionNum;
            var correctAnswer = questionList[i].correctAnswer;
            var userAnswer = questionList[i].userAnswer;
            // check isCorrect, if true, add to numCorrect
            if (isCorrect === true) {
                numCorrect++;
                // color the q-tab and chosen answer green
                $('#q-tab-'+id).addClass('q-tab-correct');
                $('#'+correctAnswer+'-q'+questionNum).addClass('q-tab-correct');
            }
            if (isCorrect === false) {
                // not correct, red class for the q-tabs and chosen answer
                $('#q-tab-'+id).addClass('q-tab-incorrect');
                $('#'+userAnswer+'-q'+questionNum).addClass('q-tab-incorrect');
                $('#'+correctAnswer+'-q'+questionNum).addClass('q-tab-correct');
            }
            // some real complicated math here to determine the score
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
            // ui changes when submitting
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
// let knockout know to apply bindings to our QuizViewModel
ko.applyBindings(new QuizViewModel());