// Create first prompt.  This will appear each time when the page is loaded.  

alert("Hello and Welcome to our JS Quiz");

// Creating an array for the 4 multiple choice questions. 
// Referencing the variable "questions" for the array of questions. 
// answerKey - the property in the object for the correct answer [via index]

var questions = [

    {
        questionTitle: "Which item below cannot start the name of a variable?" , 

        answerKey: [
           { text: "1" , correct: true},  
           { text: "Lowercase Letter" , correct: false },
           { text: "$" , correct: false},
           { text: "Uppercase" , correct: false}
        ],
     
    },


    {

        questionTitle: "What is an Array?" , 

        answerKey: [
            { text: "Only symbols" , correct: false},
            { text: "A Lowercase Letter" , correct: false},
            { text: "A fraction" , correct: false},
            { text: "A JS property that allows you to store multiple values in a single variable" , correct: true}


                ],

    },


    {

        questionTitle: "How does 10 differ from '10' ?" , 

        answerKey: [
            
            { text: "They are the same!" , correct: false},
            { text: "They are from different coding languages" , correct: false},
            
            { text: "One is a string, one an integer" , correct: true},
            
            { text: "The first is undefined." , correct: false}
        
        ],
      

    },


    {

        questionTitle: "What is the purpose of an object?" , 


        answerKey: [
            { text: "The full DOM" , correct: false},
            { text: "A Lowercase Letter" , correct: false},
            { text: "A 'storage bin' for properties." , correct: true},
            { text:  "Another name for a variable." , correct: false}  
        
        ],

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
var secondsRemaining = 5;
var header = document.getElementById("header");
var nav1 = document.getElementById("nav1");
var questionIndex;
var mixQuestions;
var timerID;




button.addEventListener("click", startQuiz);

 function startQuiz() {
        timerID = setInterval(timerStart, 1000);
     
        
        showQuestion();
        timerStart();
        

        for (var i = 0; i < questions.length; i++) {

            questions[0].textContent
        }



  }

    function timerStart(){

        secondsRemaining--;
        timeLeft.textContent = secondsRemaining;
    
        if (secondsRemaining === 0){
            timeLeft.textContent = "Time is UP!";
            
        } 
        if (secondsRemaining < 0) {
            timeLeft.textContent = "All done!";
        }
        header.classList.add("hideMe")
        nav1.setAttribute("class" , "hideMe")
        button.setAttribute("class" , "hideMe")

        }

// Function to create or move on to the next question. 

function nextQuestion() {
    resetState();
    displayQuestion(mixQuestions[questionIndex]);

}

// Displaying the questions

function showQuestion(){
  

}













