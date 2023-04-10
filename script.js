// Step 1: Create first prompt

alert("Hello and Welcome to our JS Quiz");

var questions = [

    {
        questionTitle: "Which item below cannot start the name of a variable?" , 
        answerKey: ["1" , "Lowercase Letter" , "$" , "Uppercase"],
        correctAnswer: [0]
     
    },


    {

        questionTitle: "What is an Array?" , 
        answerKey: ["1" , "Lowercase Letter" , "$" , "A JS property that allows you to store multiple values in a single variable"],
        correctAnswer: [3]

    },


    {

        questionTitle: "How does 10 differ from '10' ?" , 
        answerKey: ["1" , "Lowercase Letter" , "One is a string, one a number" , "Uppercase"],
        correctAnswer: [2]


    },


    {

        questionTitle: "What is the purpose of an object?" , 
        answerKey: ["1" , "Lowercase Letter" , "Storing a TON" , "Uppercase"],
        correctAnswer: [2]

    }

];

var button = document.getElementById("button");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var questionTitle = document.getElementById("questionTitle");
var questionPlaceholder = document.getElementById("questionPlaceholder");
var answerFeedback = document.getElementById("answerFeedback");
var secondsRemaining = 50;
var header = document.getElementById("header");
var nav1 = document.getElementById("nav1");



function timeIsUp(){
    timeLeft.textContent = "Time is up!"
}


function startTime() {

    var timerLog = setInterval(function() {
        secondsRemaining--;
        timeLeft.textContent = secondsRemaining;
    
    if(secondsRemaining === 0) {
        clearInterval(timerLog);
        timeIsUp();

    }
    },1000)}

button.addEventListener("click", function() {

    //timer
    //Start Question 1
    //Hide all other text
    startTime();
    header.classList.add("hideMe")
    nav1.setAttribute("class" , "hideMe")
    button.setAttribute("class" , "hideMe")

})









