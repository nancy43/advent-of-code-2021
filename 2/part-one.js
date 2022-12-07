import  input from './day02-input.js';
function finalPosition() {
    let [finalHorizontal, finalDepth ] = [0,0];
    // let finalHorizontal = 0 ;
    // let finalDepth = 0;
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
    console.log("Multiplied horizontal position by final depth:",finalHorizontal * finalDepth)
}
finalPosition()