import * as assert from "assert";
import finalPosition from '../2/part-one.js'
import submarine from '../2/part-two.js'

describe('Testing the Day 2: Dive! functions part 1', () => {
    it('1.Final position after multiplying horizontal position by final depth', (done) => {
        assert.equal(finalPosition(), 1488669)
        done();
    })
})

describe('Testing the Day 2: Dive! functions part 2', () => {
    it('2.Final position by part 2 criteria', (done) => {
        assert.equal(submarine(), 1176514794)
        done();
    });
})
