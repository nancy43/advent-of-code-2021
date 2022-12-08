import  input from './day02-input.js';
export default function submarine () {
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
    console.log("Multiplied final horizontal position by final depth:",finalHorizontal*finalDepth );
    return (finalHorizontal*finalDepth )
}
submarine()
