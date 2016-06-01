$(document).ready(function(){

    var totalProblems = 60;
    var problemNumber = 0;
    var correctSoFar = 0;
    
    var timeToStartWith = 60;
    var timeLeft = timeToStartWith;
    var timingFunction;
    
    $(".total").text(totalProblems);
    $(".soFar").text(correctSoFar);
    $(".timeLeft").text(timeLeft);
    
    $(".startTimer").on("click", function(){
        var button = $(this);
        button.prop("disabled", true);
        timeLeft = timeToStartWith;
        $(".timeLeft").text(timeLeft);
        
        timingFunction = setInterval(countDown, 1000);
        
        correctSoFar = 0;
        $(".soFar").text(correctSoFar);
        $(".board").html("");
        problemNumber = 0;
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
    });
    
    function countDown(){
        timeLeft -= 1;
        $(".timeLeft").text(timeLeft);
        if(timeLeft === 0){
            clearInterval(timingFunction);
            $(".startTimer").removeProp("disabled");
            $("input").prop("disabled", true);
        }
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