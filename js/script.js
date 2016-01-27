/*

- Ask the player a question with a prompt box.
- Get the player's answer and compare it to the answer stored in the app.
- If they are correct, tell them and increase their score by 1.
- If they are wrong, let them know and go on to the next question.
- Once all questions have been asked, end game and display the player's score.
- Ask if they want to play again.

*/

var Quiz = [
    ["What color is the sky?", "blue"],
    ["Which planet is closest to the Sun in our solar system?", "mercury"],
    ["What season is it during December in the northern hemisphere", "winter"],
    ["How old was Jimi Hendrix when he died?", "27"]
];

var score = 0;

play(Quiz);

function play(quiz) { // The main game loop
    
    for (var i = 0, answer; i < quiz.length; i++) { // Iterate over each question in the Quiz array.
        answer = ask(quiz[i][0]); // Present the question to the player and store their answer.
        check(answer, quiz[i][1]); // Check the player's answer against the correct one.
    }
    
    gameOver();
    
    function ask(question) {
        return prompt(question);
    }
    
    function check(answer, correct) {
        var ans = answer.toLowerCase(); // Convert the player's answer to lowercase to make comparison trivial.
        if (ans === correct) {
            alert("That is correct!");
            score++; // Increase player's score by 1.
        } else {
            alert("Sorry, wrong!");
        }
    }
    
    function gameOver() {
        if (score === Quiz.length) { // If the player got all the questions right...
            prompt("You win! All of your answers were correct. You got " + score + " points.");
        } else {
            prompt("Game over! You got " + score + " points!");
        }
        
        var replay = prompt("Do you want to play again?").toLowerCase();
        if (replay === "yes") {
            score = 0; // Reset the score for the next game.
            play(Quiz); // Start the main game function again from the beginning.
        }
    }
}