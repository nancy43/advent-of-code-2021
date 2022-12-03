const path = require('path');
const fs = require('fs');

const puzzleInput = fs
    .readFileSync(path.join(__dirname, 'puzzle-input.txt'), 'utf8')
    .toString()
    .trim()

module.exports = {
    puzzleInput,
};