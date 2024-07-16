// Select all table cells
const cells = Array.from(document.querySelectorAll('td'));

// Track the current player, scores, and next game starter
let currentPlayer = 'X';
let player1Score = parseInt(localStorage.getItem('player1Score')) || 0;
let player2Score = parseInt(localStorage.getItem('player2Score')) || 0;
let nextGameStarter = 'X';

// File paths for images and sounds
const playerXImg = "C:/Users/Monica Gliga/OneDrive/Documents/GitHub/JavaProjects_JavaScript/TicTacToe/IMAGES/x.png";
const playerOImg = "C:/Users/Monica Gliga/OneDrive/Documents/GitHub/JavaProjects_JavaScript/TicTacToe/IMAGES/o.png";
const placeSound = new Audio("C:/Users/Monica Gliga/OneDrive/Documents/GitHub/JavaProjects_JavaScript/TicTacToe/Media/place.mp3");
const winSound = new Audio("C:/Users/Monica Gliga/OneDrive/Documents/GitHub/JavaProjects_JavaScript/TicTacToe/Media/winGame.mp3");
const tieSound = new Audio("C:/Users/Monica Gliga/OneDrive/Documents/GitHub/JavaProjects_JavaScript/TicTacToe/Media/tie.mp3");

// On page load, update scores and player turn
window.onload = () => {
    updateScores();
    updatePlayerTurn();
};

// Function to place X or O on the board
function placeXOrO(id) {
    const cell = document.getElementById(id);
    if (cell.innerHTML === '') {
        cell.innerHTML = `<img src="${currentPlayer === 'X' ? playerXImg : playerOImg}" alt="${currentPlayer}" class="glow">`;
        placeSound.play();
        if (checkWinConditions()) {
            winSound.play();
            currentPlayer === 'X' ? player1Score++ : player2Score++;
            updateScores();
            nextGameStarter = currentPlayer; // Set the next game starter
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            disableClick();
            setTimeout(() => {
                clearWinLine(); // Clear the win line after a short delay
                resetBoard();
            }, 1000); // Reset after 1 second
        } else if (cells.every(cell => cell.innerHTML !== '')) {
            tieSound.play();
            setTimeout(() => alert('It\'s a tie!'), 100);
            setTimeout(resetBoard, 1000); // Reset after 1 second
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updatePlayerTurn();
        }
    }
}

// Function to check win conditions
function checkWinConditions() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        if (cells[a].innerHTML !== '' &&
            cells[a].innerHTML === cells[b].innerHTML &&
            cells[a].innerHTML === cells[c].innerHTML) {
            drawWinLine(a, b, c);
            return true;
        }
        return false;
    });
}

// Function to disable further clicks after game ends
function disableClick() {
    cells.forEach(cell => cell.style.pointerEvents = 'none');
}

// Function to draw win line on canvas
function drawWinLine(a, b, c) {
    const canvas = document.getElementById('win-lines');
    const context = canvas.getContext('2d');
    const coordinates = [
        { x: 101, y: 101 }, { x: 303, y: 101 }, { x: 505, y: 101 },
        { x: 101, y: 303 }, { x: 303, y: 303 }, { x: 505, y: 303 },
        { x: 101, y: 505 }, { x: 303, y: 505 }, { x: 505, y: 505 }
    ];

    context.beginPath();
    context.moveTo(coordinates[a].x, coordinates[a].y);
    context.lineTo(coordinates[c].x, coordinates[c].y);
    context.strokeStyle = 'green';
    context.lineWidth = 10;
    context.stroke();
}

// Function to clear win line on canvas
function clearWinLine() {
    const canvas = document.getElementById('win-lines');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to update player turn notification
function updatePlayerTurn() {
    document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s Turn`;
}

// Function to update scores displayed and store in localStorage
function updateScores() {
    document.getElementById('player1-score').textContent = `Player X: ${player1Score}`;
    document.getElementById('player2-score').textContent = `Player O: ${player2Score}`;
    localStorage.setItem('player1Score', player1Score);
    localStorage.setItem('player2Score', player2Score);
}

// Function to reset the board for the next round
function resetBoard() {
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.pointerEvents = 'auto';
    });
    currentPlayer = nextGameStarter; // Ensure the next game starter is set correctly
    updatePlayerTurn();
}

// Function to reset the game scores and the board
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    nextGameStarter = 'X'; // Reset starter to Player X
    updateScores();
    clearWinLine(); // Clear the win line immediately
    resetBoard();
}