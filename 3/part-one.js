import  input from './input-3.js';
let gammaRate = "";
let epsilonRate = "";
const length = input[0].length;
export default function getCount(input) {
    //count for number of zeros and ones
    const countForZeros = Array(length).fill(0);
    const countForOnes = Array(length).fill(0);
    for (let line of input) {
        const bits = [...line];
        bits.forEach((bit, index) => {
            if (bit === "0") {
                countForZeros[index]++;
            } else {
                countForOnes[index]++;
            }
        });
    }
    return { countForZeros, countForOnes };
}

function powerConsumption (){
    const { countForZeros, countForOnes } = getCount(input);
    for (let i = 0; i < length; i++) {
        let bit = 0;
        if (countForOnes[i] > countForZeros[i]) {
            bit = 1;
        }
        gammaRate += bit;
        epsilonRate += bit === 1 ? 0 : 1;
    }
//Converting to decimal
let powerConsumption  = (parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
console.log(powerConsumption)
}
powerConsumption()

