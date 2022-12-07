import input from './boards.js';

    const [numsList, ...boardsList] = input.split('\n\n')

    const parseBoard = (a) => {
        const z = a.split('\n').map((row) => (row.trim().split(/\s+/g).map((a) => ({ num: Number(a), check: false }))))
        z.won = false
        return z
    }

    const checkBingoBoard = (board) => {
        if (board.won) {
            return false
        }
    //rows
        for (let i = 0; i < board.length; i++) {
            let count = 0
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j].check){
                    count++
                }
            }
            if (count === 5) {
                return true
            }
        }
    //columns
        for (let j = 0; j < board[0].length; j++) {
            let count = 0
            for (let i = 0; i < board.length; i++) {
                if (board[i][j].check){
                    count++
                }
            }
            if (count === 5) {
                return true
            }
        }

        return false
    }

    const markNumber = (num, board) => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j].num === num){
                    board[i][j].check = true
                }
            }
        }
    }

    const calc = (board) => {
        let score = 0
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (!board[i][j].check){
                    score += board[i][j].num
                }
            }
        }
        return score
    }
//formatting the chosen numbers to be numbers instead of strings
    const chosenNumbers = numsList.split(',').map(Number)
//formatting the list of numbers in the boards to map with parsed board format
    const boards = boardsList.map(parseBoard)

    export const finalScoresList = []

    for (const num of chosenNumbers) {
        boards.map((board) => markNumber(num, board))
        for (const winnerBoard of boards.filter(checkBingoBoard)) {
            finalScoresList.push(calc(winnerBoard) * num)
            winnerBoard.won = true
        }
    }
//The first winning score from the finalScoresList would be the score of first winning board
    console.log("Final Score for the first winning board is:",finalScoresList[0] )


