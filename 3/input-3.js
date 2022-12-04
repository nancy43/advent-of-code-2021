const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input-3.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n');

module.exports = {
    input,
};
