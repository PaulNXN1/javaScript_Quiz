// Create first prompt.  This will appear each time when the page is loaded.  

alert("Hello and Welcome to our JS Quiz");

// Creating an array for the 4 multiple choice questions. 
// Referencing the variable "questions" for the array of questions. 
// correctAnswer - the property in the object for the correct answer [via index]

var questions = [

    {
        questionTitle: "Which item below cannot start the name of a variable?" , 
        answerKey: ["1" , "Lowercase Letter" , "$" , "Uppercase"],
        correctAnswer: [0]
     
    },


    {

        questionTitle: "What is an Array?" , 
        answerKey: ["Another variable" , "Lowercase Letter" , "$" , "A JS property that allows you to store multiple values in a single variable"],
        correctAnswer: [3]

    },


    {

        questionTitle: "How does 10 differ from '10' ?" , 
        answerKey: ["They are the same!" , "They are from different coding languaages." , "One is a string, one an integer" , "The first is undefined."],
        correctAnswer: [2]


    },


    {

        questionTitle: "What is the purpose of an object?" , 
        answerKey: ["The full DOM" , "A Lowercase Letter" , "A 'storage bin' for properties." , "Another name for a variable."],
        correctAnswer: [2]

    }

];

// List of variables to execute all the functions.  
// All variables below "sourced" or attached to the classes / ids from the HTML file. 

var button = document.getElementById("button");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var questionTitle = document.getElementById("questionTitle");
var questionPlaceholder = document.getElementById("questionPlaceholder");
var answerFeedback = document.getElementById("answerFeedback");
var secondsRemaining = 50;
var header = document.getElementById("header");
var nav1 = document.getElementById("nav1");
var questionIndex = 0;



button.addEventListener("click", function(startTime) {

        var timerLog = setInterval.function() {
            secondsRemaining--;
            timeLeft.textContent = secondsRemaining;
        
        if(secondsRemaining === 0) {
            clearInterval(timerLog);
            timeIsUp();
    
        
        },1000)


)}

function timeIsUp(){
    timeLeft.textContent = "Time is up!"
}






    //Starting Question 1





    startTime();
    header.classList.add("hideMe")
    nav1.setAttribute("class" , "hideMe")
    button.setAttribute("class" , "hideMe")












