const { input } = require('./input-3');
let count = {};
function getCommonLeast(){
    for (let line of input) {
        for (let i = 0; i < line.length; i++) {
            if (!count[i]) {
                count[i] = [0, 0];
            }
            let val = +line[i];
            count[i][val]++;
        }
    }
}
getCommonLeast()

let mostCommon = [];
let leastCommon = [];
for (let counts of Object.values(count)) {
    if (counts[0] > counts[1]) {
        mostCommon.push(0);
        leastCommon.push(1);
    } else if (counts[0] === counts[1]) {
        mostCommon.push(null);
        leastCommon.push(null);
    } else {
        mostCommon.push(1);
        leastCommon.push(0);
    }
}


