const { input } = require('./input');
function submarine () {
    let finalHorizon = 0;
    let finalDepth = 0;
    let aim = 0;
    for (let {direction, value} of input) {
        if (direction === 'forward') {
            finalHorizon += value;
            finalDepth += aim * value;
        }
        console.log(finalHorizon)
    }
}
submarine()
