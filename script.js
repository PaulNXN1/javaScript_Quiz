// Create first prompt.  This will appear each time when the page is loaded.  

alert("Hello and Welcome to our JS Quiz");

// Creating an array for the 4 multiple choice questions. 
// Referencing the variable "questions" for the array of questions. 
// answerKey - the property in the object for the correct answer [via index]

var questions = [

    {
        questionTitle: "Which item below cannot start the name of a variable?",

        answerKey: [
            { text: "1", correct: true },
            { text: "Lowercase Letter", correct: false },
            { text: "$", correct: false },
            { text: "Uppercase", correct: false }
        ],

    },


    {

        questionTitle: "What is an Array?",

        answerKey: [
            { text: "Only symbols", correct: false },
            { text: "A Lowercase Letter", correct: false },
            { text: "A fraction", correct: false },
            { text: "A JS property that allows you to store multiple values in a single variable", correct: true }


        ],

    },


    {

        questionTitle: "How does 10 differ from '10' ?",

        answerKey: [

            { text: "They are the same!", correct: false },
            { text: "They are from different coding languages", correct: false },

            { text: "One is a string, one an integer", correct: true },

            { text: "The first is undefined.", correct: false }

        ],


    },


    {

        questionTitle: "What is the purpose of an object?",


        answerKey: [
            { text: "The full DOM", correct: false },
            { text: "A Lowercase Letter", correct: false },
            { text: "A 'storage bin' for properties.", correct: true },
            { text: "Another name for a variable.", correct: false }

        ],

    }

];

// List of variables to execute all the functions.  
// All variables below "sourced" or attached to the classes / ids from the HTML file. 

var button = document.getElementById("button");
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var questionTitle = document.getElementById("questionTitle");
var answerButtons = document.getElementById("questionPlaceholder");

var answerFeedback = document.getElementById("answerFeedback");
var secondsRemaining = 50;
var header = document.getElementById("header");
var nav1 = document.getElementById("nav1");
var questionIndex = 0;
var mixQuestions;
var timerID;
var scoreEl = document.getElementById("score");




//Initial phase of the program.


//Button to click to initiate

button.addEventListener("click", startQuiz);

function startQuiz() {

    showQuestion();
    timerStart();

    header.classList.add("hideMe")
    nav1.setAttribute("class", "hideMe")
    button.setAttribute("class", "hideMe")

}

// This is the timer function when the program initiates. 

function timerStart() {

    timerID = setInterval(function () {

        timeLeft.textContent = secondsRemaining;
        secondsRemaining--;

        if (secondsRemaining === 0) {
            timeLeft.textContent = "Time is UP!";
            clearInterval(timerID);

        }
        if (secondsRemaining < 0) {
            timeLeft.textContent = "All done!";
        }

    }, 1000)
};


// Displaying the NEXT questions

function showQuestion() {
    questionTitle.textContent = questions[questionIndex].questionTitle;

    answerButtons.innerHTML = "";

    // How the quiz loops through the questions  

    for (var i = 0; i < questions[questionIndex].answerKey.length; i++) {

        var answerButton = document.createElement("button");
        answerButtons.append(answerButton);
        answerButton.textContent = questions[questionIndex].answerKey[i].text;
        answerButton.classList.add("spacer")
        answerButton.setAttribute("data-correct", `${questions[questionIndex].answerKey[i].correct}`)

        console.log(questions[questionIndex].answerKey[i].correct);

        answerButton.addEventListener("click", answerCheck)

    }

}

// Conclusion of quiz, when tallying the score and displaying the score. 

function endQuiz() {
    let score = secondsRemaining;
    scoreEl.textContent = "Here is your score: " + score;
    answerButtons.innerHTML = " ";
    timer.innerHTML = " ";

}

// This function displays the response if the user is correct (true) or incorrect (false).

function answerCheck(event) {

    if (event.target.dataset.correct === "true") {

        answerFeedback.textContent = "Sweet..!"

    } else {

        secondsRemaining -= 10;
        answerFeedback.textContent = "No way, really?!!"
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        showQuestion();

    } else {

        endQuiz();
       


    }

}



