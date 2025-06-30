const quizQuestions = document.getElementById('quiz-question'); 
const answerButtons = document.querySelector ('.answer-button'); 
const nextbutton = document.getElementById('next-btn'); 
const startquiz = document.getElementById('startquiz');
const scoreDisplay = document.getElementById('score'); // Selects the paragraph element for displaying score
const timerDisplay = document.getElementById('timer'); 

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15; // Sets the initial time for each question (in seconds)
let timerInterval;

const Questions = [
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars","Jupyter"],
        correctAnswer: "Mars", 
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "What is the currency of Japan?",
        options: ["Japanese Yen", "USD" ,"INR","EUR"],
        correctAnswer: "Japanese Yen",
    },
    {
        question: "How many legs does a spider have?",
        options: ["10", "8" ,"12","2"],
        correctAnswer: "8",
    },
    {
        question: "What is the fastest bird in the world?",
        options: ["Japan", "Peregrine Falcon" ,"Peacock","Cat"],
        correctAnswer: "Peregrine Falcon",
    },
    {
        question: "How many hearts does an octopus have?",
        options: ["10", "8" ,"12","3"],
        correctAnswer: "3",
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Cheetah", "Peacock" ,"Snail","Bat"],
        correctAnswer: "Cheetah",
    },

];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    startquiz.style.display = "none";
    timerDisplay.style.display = "block";
    loadQuestion();
}
function loadQuestion() {  
    nextbutton.style.display = "none";    
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    quizQuestions.innerHTML = `${questionNo}. ${currentQuestion.question}`; 
    
    
    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');

        if(option === currentQuestion.correctAnswer) {
            button.dataset.correct = "true";
        }
        answerButtons.appendChild(button);
        });
        resetTimer();
}

function showScore() {
    nextbutton.style.display = "none";  

    // forgot
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    timerDisplay.style.display = 'none';


    quizQuestions.innerHTML = `You have scored ${score} out of ${Questions.length}`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
function nextHandleButton() {
    currentQuestionIndex++;
    if(Questions.length > currentQuestionIndex){
        loadQuestion();
    } else {
        showScore();    
    }
}
function selectedAnswers() {
    Array.from(answerButtons.children).forEach(button => {
        button.addEventListener("click", e => {
            const selectedButton = e.target;
            const isCorrect = selectedButton.dataset.correct === "true";

            if(isCorrect) {
                selectedButton.classList.add('correct');
                score++;
            } else {
                selectedButton.classList.add("incorrect");
            }

            Array.from(answerButtons.children).forEach(button => {
                if(button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            nextbutton.style.display = "block";
        }); 
    });
}
nextbutton.addEventListener("click", () => {
    if (currentQuestionIndex < Questions.length) {
        nextHandleButton();
    } else {
        startQuiz(); // Restart the quiz
    }
});

startQuiz();

function resetTimer() {
    clearInterval(timerInterval); // Stop any existing timer to prevent multiple timers running
    timeLeft = 15; // Reset time for the current question

    timerDisplay.innerText = `Time left: ${timeLeft}s`; // Update timer display immediately

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval); // Stop the timer when it reaches zero
            timerDisplay.innerText = "Time's Up!";
            
            // Automatically simulate an incorrect selection if time runs out
            // This disables buttons, shows correct answer, and makes 'Next' button appear
            Array.from(answerButtons.children).forEach(button => {
                button.disabled = true; // Disable all buttons
                if (button.dataset.correct === "true") {
                    button.classList.add("correct"); // Highlight correct answer
                } else {
                    button.classList.add("incorrect"); // Mark all others as incorrect (if not already disabled)
                }
            });
            nextbutton.style.display = 'block'; // Show the 'Next' button
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}
