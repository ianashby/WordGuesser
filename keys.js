const keyboard = document.querySelector('.keys');
const messageDisplay = document.querySelector('.message');
let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

const keys = [
    'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','ENTER','Z','X','C','V','B','N','M','DELETE'
];

keys.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.setAttribute('id', key);
    button.addEventListener('click', () => clickHandler(key));
    keyboard.appendChild(button);
});

function clickHandler(key){
    console.log('clicked!', key)

    if (key === 'ENTER') {
        checkRow();
    } else if (key === 'DELETE'){
        deleteLetter();
    } else {
        addLetter(key);
    }
}

function addLetter(letter) {
    if (currentTile < 5 && currentRow < 6) {
        const tileLetter = document.querySelector(`#row${currentRow}tile${currentTile}`);
        tileLetter.textContent = letter;
        tileLetter.setAttribute('data', letter);

        board[currentRow][currentTile] = letter;

        currentTile++;
    }
}

function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tileLetter = document.querySelector(`#row${currentRow}tile${currentTile}`);
        tileLetter.textContent = '';
        tileLetter.setAttribute('data', '');

        board[currentRow][currentTile] = '';
    }
}

function checkRow() {
    const wordGuess = board[currentRow].join('');

    if (currentTile > 4) {
        colorTiles();
        
        if (word === wordGuess) {
            showMessage('Good job!');
            isGameOver = true;
        } else {
            if (currentRow >= 5) {
                showMessage('Game over!')
                isGameOver = true;
            }
            if (currentRow < 5) {
                currentRow++;
                currentTile = 0;
            }
        }
    }
}

function showMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageDisplay.appendChild(messageElement);
    setTimeout(() => messageDisplay.removeChild(messageElement), 3000)
}