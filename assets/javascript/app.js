function startTimer(duration, display) {
    var timer = seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

$(function ($) {
    var thirtySeconds = 60 % 2,
        display = $('#time');
    startTimer(thirtySeconds, display);
});


var numQuestions = 4;


var numChoices = 4;


var answers = new Array(4);


answers[0] = "George Washington";
answers[1] = "William Henry Harrison";
answers[2] = "March 4th";
answers[3] = "Theodore Roosevelt";
alert(correctAnswers);


function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQuestions; i++) {
    currElt = i*numChoices;
    for (j=0; j<numChoices; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value === answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQuestions*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQuestions; i++) {
    correctAnswers += i + ". " + answers[i-1];
  }
  form.solutions.value = correctAnswers;
}


