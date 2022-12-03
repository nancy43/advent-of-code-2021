const { puzzleInput } = require('./puzzle-input');
function countMeasurements (){
    let count = 0;
    for (let i = 0; i < puzzleInput.length; i++) {
        if (puzzleInput[i] < puzzleInput[i+1]) {
            return true;
        }
    }
    console.log(count);
}
countMeasurements()