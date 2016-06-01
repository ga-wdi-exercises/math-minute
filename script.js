$(document).ready(function(){

    var firstNumber = Math.round(Math.random() * 10);
    var secondNumber = Math.round(Math.random() * 10);
    var sum = (firstNumber + secondNumber);
    $(".board").append("<h2>" + firstNumber + " + " + secondNumber + " = " + sum + "</h2>");

});