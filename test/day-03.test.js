import * as assert from "assert";
import {powerConsumption} from '../3/part-one.js'
import getLifeSupportRating from "../3/part-two.js";

describe('Testing the Day 4: Giant Squid Bingo function part 1', () => {
    it('1.Power consumption of the submarine', (done) => {
        assert.equal(powerConsumption(), 2640986)
        done();
    })
})

describe('Testing the Day 4: Giant Squid Bingo function part 2', () => {
    it('2.Life support rating of the submarine', (done) => {
        assert.equal(getLifeSupportRating(), 6822109)
        done();
    });
})
