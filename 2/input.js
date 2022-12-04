const path = require('path');
const fs = require('fs');

const input = fs
    .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
    .toString()
    .trim()
    .split('\n')
    .map((line) => {
        let [direction, value] = line.split(' ');
        value = parseInt(value, 10);

        return {
            direction,
            value,
        };
    });

module.exports = {
    input,
};