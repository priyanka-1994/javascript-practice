// 1. Get references to our HTML elements
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// 2. Define our quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is 2 + 12?",
        answers: [
            { text: "14", correct: true},
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    }
];

// 3. Variables to keep track of quiz state
let currentQuestionIndex = 0;
let score = 0;

// 4. Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0; // Reset for new quiz
    score = 0; // Reset score
    nextButton.innerHTML = "Next"; // Change button text back to "Next" for restart
    showQuestion(); // Call the function to display the first question
}

// 5. Function to display the current question
function showQuestion() {
    // Hide the next button initially for each new question
    nextButton.style.display = "none";

    // Clear any previous answer buttons
    // This loop removes all child elements from the answerButtonsElement
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    // Get the current question object
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; // For displaying "Question 1 of X"

    // Update the question text in the HTML
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Create buttons for each answer option
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); // Create a new button element
        button.innerHTML = answer.text; // Set the button's text to the answer option
        button.classList.add("btn"); // Add the 'btn' class for styling

        // Add a data attribute to store if the answer is correct
        // This is a common way to attach custom data to HTML elements
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        answerButtonsElement.appendChild(button); // Add the button to the answer buttons container
    });

    // Call selectAnswer to add event listeners to the newly created buttons
    selectAnswer();
}

// 6. Function to handle answer selection
function selectAnswer() {
    // Add event listeners to all answer buttons after they are created
    Array.from(answerButtonsElement.children).forEach(button => {
        button.addEventListener("click", e => {
            const selectedButton = e.target; // Get the button that was clicked
            // Check if the data-correct attribute exists and its value is "true"
            // Note: dataset values are always strings, so compare to "true"
            const isCorrect = selectedButton.dataset.correct === "true"; 

            if (isCorrect) {
                selectedButton.classList.add("correct"); // Add green background for correct
                score++; // Increment score if correct
            } else {
                selectedButton.classList.add("incorrect"); // Add red background for incorrect
            }

            // Disable all buttons after an answer is selected and highlight correct one
            Array.from(answerButtonsElement.children).forEach(button => {
                // If a button has data-correct="true", always mark it correct (even if not selected)
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                // Important: remove the event listener from each button after selection
                // to prevent multiple clicks affecting the score or state
                button.removeEventListener("click", selectAnswer); 
                button.disabled = true; // Disable the button
            });

            // Show the next button
            nextButton.style.display = "block";
        });
    });
}

// 7. Function to handle the "Next" button click
function handleNextButton() {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        // If there are more questions, show the next one
        showQuestion();
    } else {
        // If no more questions, show the score
        showScore();
    }
}

// 8. Function to show the final score
function showScore() {
    // Hide the next button
    nextButton.style.display = "none";

    // Clear previous answer buttons
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

    // Display the score
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    // Change the "Next" button to "Play Again" and show it
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// 9. Add an event listener to the Next button
nextButton.addEventListener("click", () => {
    // If we are at the end of the quiz (i.e., showScore was just called), restart it.
    // Otherwise, move to the next question.
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz(); // Restart the quiz
    }
});

// Initial call to start the quiz when the script loads
startQuiz();
