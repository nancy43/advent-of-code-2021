import * as assert from "assert";
import {finalScoresList} from '../4/part-one.js'
import {LastBoardScore} from '../4/part-two.js'

describe('Testing the functions for Bingo Giant Squid game', () => {
    it('1.Score of the first winning board', (done) => {
        assert.equal(finalScoresList[0], 12796)
        done();
    })
})

describe('Testing the functions for Bingo Giant Squid game', () => {
    it('2.Score of the last winning board', (done) => {
        assert.equal(LastBoardScore, 18063)
        done();
    });
})
