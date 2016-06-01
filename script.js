$(document).ready(function(){

    var totalProblems = 60;
    var problemNumber = 0;
    
    while(problemNumber < totalProblems){
        $(".board").append(randomProblemUpTo(10));
        problemNumber += 1;
    }

    function randomNumberUpTo(maximum){
        return Math.round(Math.random() * maximum);
    }
    
    function randomProblemUpTo(maximum){
        var firstNumber = randomNumberUpTo(maximum);
        var secondNumber = randomNumberUpTo(maximum);
        var sum = (firstNumber + secondNumber);
        return ("<h2>" + firstNumber + " + " + secondNumber + " = " + sum + "</h2>");
    }

});