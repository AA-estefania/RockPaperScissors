const choices = ['rock', 'paper', 'scissors'];
const resultText = document.getElementById('result-text');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const resultGif = document.getElementById('result-gif');
const resultParagraphs = document.querySelectorAll('.result p');

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const playerSelection = this.id;
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];

        // Hide player and computer results, and the result text, and show GIF
        resultParagraphs.forEach(p => p.classList.add('hide-results'));
        resultText.classList.add('hide-results');
        resultGif.style.display = 'block'; // Show GIF

        // Hide GIF and show results after a delay
        setTimeout(() => {
            resultGif.style.display = 'none'; // Hide GIF
            resultParagraphs.forEach(p => p.classList.remove('hide-results'));
            resultText.classList.remove('hide-results');
            
            // Show player and computer results
            playerChoice.textContent = capitalize(playerSelection);
            computerChoice.textContent = capitalize(computerSelection);

            // Determine and show the result
            const result = determineWinner(playerSelection, computerSelection);
            resultText.textContent = result;
            resultText.classList.add('show-result');
        }, 1500); // Duration of GIF animation
    });
});

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!!!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!!!';
    } else {
        return 'You lose!!!';
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}