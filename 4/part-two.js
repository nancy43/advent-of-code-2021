import {finalScoresList} from './part-one.js';
//The last winning score from the finalScoresList would be the score of last winning board
export const LastBoardScore = finalScoresList[finalScoresList.length - 1];
console.log("Final score for the last winning board is:",LastBoardScore)