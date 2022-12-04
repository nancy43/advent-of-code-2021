const { input } = require('./input');
function submarine () {
    let [aim, finalHorizontal, finalDepth ] = [0,0,0];
    for (let { direction, value } of input) {
        if (direction === 'forward') {
            finalHorizontal += value;
            finalDepth += aim * value;
        }
        else if (direction === 'up') {
            aim -= value;
        } else if (direction === 'down') {
            aim += value;
        } else {
            return false;
        }
    }
    console.log(finalDepth * finalHorizontal);
}
submarine()
