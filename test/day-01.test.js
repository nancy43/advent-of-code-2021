import * as assert from "assert";
import {countMeasurements} from '../1/part-one.js'
import {slidingWindow} from '../1/part-two.js'

describe('Testing the Sonar Sweep function part 1', () => {
    it('1.The count for the measurements larger than the previous measurements', (done) => {
        assert.equal(countMeasurements(), 1400)
        done();
    })
})

describe('Testing the Sonar Sweep function part 2', () => {
    it('2.The count for the sums are larger than the previous sum', (done) => {
        assert.equal(slidingWindow(), 1429)
        done();
    });
})
