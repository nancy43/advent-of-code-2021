const { input } = require('./input-3');
let count = {};
let epsilonRate = [];
let gammaRate = [];
for (let line of input) {
    for (let i = 0; i < line.length; i++) {
        if (!count[i]) {
            // [count for zeros and ones]
            count[i] = [0, 0];
        }
        let val = +line[i];
        count[i][val]++;
    }
}

for (let counts of Object.values(count)) {
    if (counts[0] > counts[1]) {
        gammaRate.push(0);
        epsilonRate.push(1);
    } else {
        gammaRate.push(1);
        epsilonRate.push(0);
    }
}
//Converting to decimal
let decGammaRate = parseInt(gammaRate.join(''), 2)
let decEpsilonRate = parseInt(epsilonRate.join(''), 2)
let powerConsumption = decGammaRate * decEpsilonRate
console.log(powerConsumption)


