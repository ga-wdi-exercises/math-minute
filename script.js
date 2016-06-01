$(document).ready(function(){

    var totalProblems = 60;
    var problemNumber = 0;
    
    while(problemNumber < totalProblems){
        $(".board").append(randomProblemUpTo(10));
        problemNumber += 1;
    }
    
    $("input").on("change", function(){
        var el = $(this);
        var answer = el.attr("secret-answer");
        var guess = el.val();
        if(guess == answer){
            el.css("background-color", "#afa");
        }else{
            el.css("background-color", "#faa");
        }
    });

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