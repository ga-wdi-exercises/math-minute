$(document).ready(function(){

    var totalProblems = 60;
    var problemNumber = 0;
    var correctSoFar = 0;
    
    var timeLeft = 60;
    
    $(".total").text(totalProblems);
    $(".soFar").text(correctSoFar);
    $(".timeLeft").text(timeLeft);
    
    while(problemNumber < totalProblems){
        $(".board").append(randomProblemUpTo(10));
        problemNumber += 1;
    }
    
    $("input").on("change", function(){
        var input = $(this);
        var answer = input.attr("secret-answer");
        var guess = input.val();
        var colorGood = "#afa";
        var colorBad = "#faa";
        if(guess == answer){
            input.css("background-color", colorGood);
            input.parent().fadeOut();
            
            correctSoFar += 1;
            $(".soFar").text(correctSoFar);
        }else{
            input.css("background-color", colorBad);
        }
    });
    
    $(".startTimer").on("click", function(){
        var button = $(this);
        button.prop("disabled", true);
        setInterval(countDown, 1000);
    });
    
    function countDown(){
        timeLeft -= 1;
        $(".timeLeft").text(timeLeft);
    }

    function randomNumberUpTo(maximum){
        return Math.round(Math.random() * maximum);
    }
    
    function randomProblemUpTo(maximum){
        var firstNumber = randomNumberUpTo(maximum);
        var secondNumber = randomNumberUpTo(maximum);
        var sum = (firstNumber + secondNumber);
        return ("<h2>" + firstNumber + " + " + secondNumber + " = " + "<input secret-answer='" + sum + "' />" + "</h2>");
    }

});