var targetNumber;
var totalScore;

var crystal1value;
var crystal2value;
var crystal3value;
var crystal4value;
// Create new game
function startNewGame() {
    // Pick a random number between 19 and 120, target number
    targetNumber = Math.ceil(Math.random() * 101 + 19);
    // Write it in 'target-number'
    $('#target-number').html(`${targetNumber}`);
    // Give crystals new random values betwwen 1 and 12
    crystal1value = Math.ceil(Math.random() * 11 + 1);
    crystal2value = Math.ceil(Math.random() * 11 + 1);
    crystal3value = Math.ceil(Math.random() * 11 + 1);
    crystal4value = Math.ceil(Math.random() * 11 + 1);
    // Reset Player's total score to 0
    totalScore = 0;
    $('#score').html(`${totalScore}`);
}
// When crystal clicked
function whenCrystalClicked(crystalValue) {
    // Clear prev game resul
    $('#prev-game-result').html('');
    // Increment Player's total score by crystal's value
    totalScore += crystalValue;
    // Update total score in DOM
    $('#score').html(`${totalScore}`);
    // If updated total score === target number
    if (totalScore === targetNumber) {
        /* The Player wins */
        // Update wins by 1
        $('#wins').html(`${parseInt($('#wins').html()) + 1}`);
        // Write in 'prev-game-result' that Player won
        $('#prev-game-result').html("You Won!");
        // startNewGame()
        startNewGame();
    }
    // If updated total score > target number
    else if (totalScore > targetNumber) {
        /* The player looses */
        // Update losses by 1
        $('#losses').html(`${parseInt($('#losses').html()) + 1}`);
        // Write in 'prev-game-result' that Player lost
        $('#prev-game-result').html("You Lost");
        // startNewGame()
        startNewGame();
    }
}

// Start new game
startNewGame();

/* Add event listeners on all crystals */
// When clicked, call whenCrystalClicked() passing in crystal value
$('#crystal1').on('click', () => {
    whenCrystalClicked(crystal1value);
});

$('#crystal2').on('click', () => {
    whenCrystalClicked(crystal2value);
});

$('#crystal3').on('click', () => {
    whenCrystalClicked(crystal3value);
});

$('#crystal4').on('click', () => {
    whenCrystalClicked(crystal4value);
});
