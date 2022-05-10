const tiles = document.querySelector('.tiles');

const board = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

board.forEach((row, rowIndex) => {
    const rowElem = document.createElement('div');
    rowElem.setAttribute('id', 'row' + rowIndex);

    row.forEach((tile, tileIndex) => {
        const tileElem = document.createElement('div');
        tileElem.setAttribute('id', 'row' + rowIndex + 'tile' + tileIndex);
        tileElem.classList.add('tile');
        rowElem.append(tileElem)
    });

    tiles.append(rowElem);
});

function colorTiles() {
    const rowTiles = document.querySelector(`#row${currentRow}`).childNodes;
    rowTiles.forEach((tile, index) => {
        const letterData = tile.getAttribute('data');

        if (letterData === word[index]) {
            tile.classList.add('green');
        } else if (word.includes(letterData)) {
            tile.classList.add('yellow');
        } else {
            tile.classList.add('grey');
        }
    });
}