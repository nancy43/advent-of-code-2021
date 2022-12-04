const { puzzleInput } = require('./puzzle-input');
function slidingWindow (){
    let count = 0;
    for (let i = 0; i < puzzleInput.length-3; i++) {
       let sum0 = (puzzleInput[i]+puzzleInput[i+1]+puzzleInput[i+2]);
       let sum1 = (puzzleInput[i+1]+puzzleInput[i+2]+puzzleInput[i+3]);
       if (sum1 > sum0){
           count ++;
       }
    }
    console.log(count);
}
slidingWindow()