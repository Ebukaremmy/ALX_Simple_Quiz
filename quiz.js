function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user clicked submit without selecting anything
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare answers and display feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
