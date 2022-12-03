const { puzzleInput } = require('./puzzle-input');
function countMeasurements (){
    let count = 0;
    for (let i = 0; i < puzzleInput.length-1; i++) {
        if (puzzleInput[i] < puzzleInput[i+1]) {
            count++;
        }
    }
    console.log(count);
}
countMeasurements()