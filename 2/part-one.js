const { input } = require('./input');
function finalPosition() {
    let finalHorizontal = 0 ;
    let finalDepth = 0;
    for (let { direction, value } of input) {
        if (direction === 'forward') {
            finalHorizontal += value;
        }
        if (direction === 'down') {
            finalDepth += value;
        }
        if (direction === 'up') {
            finalDepth -= value;
        }
    }
    console.log(finalHorizontal * finalDepth)
}
finalPosition()