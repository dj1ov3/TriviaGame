$(document).ready(function(){
var quizTimer = setTimeout(function(){
    // console.log("chea boii!")},3000);
    console.log(time)},1000);
    
var answers = [$("input:radio")]
var rightAnswers = [$("#ear4"),$("#piano4"),$("#gtr3"),$("#p161")];
var time = 120;
var intervalId;
var correctAnswers = 0;
var incorrectAnswers = 0;


$("#questionsBox, #timeBox").hide();

$("#start").on("click", function(){
  $("#start").hide();
  $("#questionsBox, #timeBox").show();
  intervalId = setInterval(count, 1000);

});



// window.onload = function() {


//   intervalId = setInterval(count, 1000);

// }

 

function count() {

  time--;
  var converted = timeConverter(time);
  $("#timeBox").text("Time Remaining: " + converted);

  if( converted == "00:00"){
    clearInterval(intervalId);
    checkScore();
    
    $("#yourScore").text("Correct Answers: " + correctAnswers)
    $("#yourScore").append("<br>Incorrect Answers: " + incorrectAnswers)

    $("form").hide();
  }
};

function checkScore(){
  if($("#ear4").is(":checked")){
      correctAnswers++
    }else{
      incorrectAnswers++
    }
  
  if($("#piano4").is(":checked")){
    correctAnswers++
    }else{
    incorrectAnswers++
    }
 
  if($("#gtr3").is(":checked")){
    correctAnswers++
    }else{
      incorrectAnswers++
    }

  if($("#space1").is(":checked")){
    correctAnswers++
    }else{
      incorrectAnswers++
    }
  
  
  if($("#pi2").is(":checked")){
    correctAnswers++
    }else{
      incorrectAnswers++
    }
  console.log(correctAnswers);
  console.log(incorrectAnswers);
  

};


function timeConverter(t) {

      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
    
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
    
      return minutes + ":" + seconds;
};





});