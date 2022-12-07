import  input from './day03-input.js';
import getCount from './part-one.js';
function getOxygenRating(input, index = 0) {
    const { countForZeros, countForOnes } = getCount(input);
    let mostCommonBit = "1";
    if (countForZeros[index] > countForOnes[index]) {
        mostCommonBit = "0";
    }
    const filtered = input.filter((line) => line[index] === mostCommonBit);
    if (filtered.length === 1) {
        return filtered[0];
    }
    return getOxygenRating(filtered, index + 1);
}

function getCO2Rating(input, index = 0) {
    const { countForZeros, countForOnes } = getCount(input);
    let leastCommonBit = "0";
    if (countForZeros[index] > countForOnes[index]) {
        leastCommonBit = "1";
    }
    const filtered = input.filter((line) => line[index] === leastCommonBit);
    if (filtered.length === 1) {
        return filtered[0];
    }
    return getCO2Rating(filtered, index + 1);
}

function getLifeSupportRating() {
    const oxygenRating = getOxygenRating(input);
    const CO2Rating = getCO2Rating(input);

   let lifeSupportRating = (parseInt(oxygenRating, 2) * parseInt(CO2Rating, 2));
    console.log("The life support rating of the submarine is:",lifeSupportRating)
}
getLifeSupportRating()

