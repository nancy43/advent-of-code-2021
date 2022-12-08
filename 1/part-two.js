import  puzzleInput from './day01-input.js';
export function slidingWindow (){
    let count = 0;
    for (let i = 0; i < puzzleInput.length-3; i++) {
       let current = (puzzleInput[i]+puzzleInput[i+1]+puzzleInput[i+2]);
       let next = (puzzleInput[i+1]+puzzleInput[i+2]+puzzleInput[i+3]);
       if (next > current){
           count ++;
       }
    }
    console.log("Sums larger than the previous sum:",count);
    return count;
}
slidingWindow()