import  puzzleInput from './day01-input.js';
export function countMeasurements (){
    let count = 0;
    for (let i = 0; i < puzzleInput.length-1; i++) {
        if (puzzleInput[i] < puzzleInput[i+1]) {
            count++;
        }
    }
    console.log("Measurements larger than the previous measurement:",count);
    return count;
}
countMeasurements()