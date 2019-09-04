$(function() {
    // JSON object to hold all our questions and answers - kl
    // add some questions here
    var questions = {
        "one": {
            "question": "What does js stand for?",
            "answerOne":"jQuery Script",
            "answerTwo":"Java Serialized",
            "answerThree":"JSONScript",
            "answerFour":"JavaScript",
            "correctAnswer":"answerFour"
        },
        "two": {
            "question":"How do you print a message to the console?",
            "answerOne":"Logger.log()",
            "answerTwo":"console.log()",
            "answerThree":"console.log[]",
            "answerFour":"Console.log()",
            "correctAnswer":"answerTwo"
        }
    }
    // qId is used for creating unique ids for each question in our questions object, we increment it +1 every loop -kl
    qId=1;
    // get each question -kl
    for (var key in questions) {
        // this will return each parent key of our JSON object (one, two, three, four etc) -kl
        var question = questions[key];
        // using template literals for the extended html var - kl, source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals -kl
        // ${} is how to insert a js variable inside a template literal -kl
        var html = 
        `<section class='question-container'>
            <div id='question-${qId}' class='question'><h2>${question.question}</h2></div>
            <div id='answer-one-q${qId}' class='answer'><p>${question.answerOne}</p></div>
            <div id='answer-two-q${qId}' class='answer'><p>${question.answerTwo}</p></div>
            <div id='answer-three-q${qId}' class='answer'><p>${question.answerThree}</p></div>
            <div id='answer-four-q${qId}' class='answer'><p>${question.answerFour}</p></div>
            <div id='correct-incorrect-q${qId}' class='question-result'></div>
        </section>`
        // add our html string variable to the main element in our html document -kl
        $('main').append(html);
        // +1 for the next id -kl
        qId++;
    }
});