// Author: Kurt Leadley
// script to handle the q-tabs classes, question navigation and question display
// some question display logic is also present in the QuizViewModel
$( document ).ready(function() {
    // create a q-tab for every question in our questionList
    for (i=1; i <= questionList.length; i++) {
        // hide all the questions on load
        $('#q'+i).hide();
        // save each question's html in resultsHtml
        // using template literal syntax here | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        var resultsHtml = `<div id='q-tab-${i}' class='q-tab'><p>Question ${i}</p></div>`;
        // append all the questions HTML to the q-tabs-container | https://api.jquery.com/append/
        $('.q-tabs-container').append(resultsHtml);
    }
    // show the first question
    $('#q1').show();
    // set the first question as the active question on page load | https://api.jquery.com/addClass/
    $('#q-tab-1').addClass('q-tab-active');
    // when clicking on one of the 10 q-tabs
    $(".q-tab").click(function(){
        // get the q-tab id
        var qTabId = $(this).attr('id');
        // get just the number of the q-tab id
        qId = qTabId.split('q-tab-')[1];
        // loop through all q-tabs
        for (i=1; i <= questionList.length; i++) {
            // hide all questions, the proper question is shown after this loop
            $('#q'+i).hide();
            // remove q-tab-active class for all q-tabs | https://api.jquery.com/removeClass/
            $("#q-tab-"+i).removeClass('q-tab-active');
        }
        // show the proper question, based on the clicked q-tab
        $('#q'+qId).show().css("display","grid");
        // add the class q-tab-active to the clicked q-tab
        $("#q-tab-"+qId).addClass('q-tab-active');
    });
}); 
