const { input } = require('./input');
function finalPosition() {
    let finalHorizon = 0 ;
    let finalDepth = 0;
    for (let { direction, value } of input) {
        if (direction === 'forward') {
            finalHorizon += value;
        }
        if (direction === 'down') {
            finalDepth += value;
        }
        if (direction === 'up') {
            finalDepth -= value;
        }
    }
    console.log(finalHorizon)
    console.log(finalDepth)
    console.log(finalHorizon * finalDepth)
}
finalPosition()