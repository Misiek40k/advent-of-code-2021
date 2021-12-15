const fs = require('fs');

const bitCalculation = (fileName) => {
    try {
        const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n');
        const bitsArr = dataArr.map(value => value.split(''));
        const bitsCountArr = [];

        let gammaRate = '';
        let epsilonRate = '';

        bitsArr.forEach(bitNumber => {
            bitNumber.forEach((number, index) => {
                if (number === '1') {
                    bitsCountArr[index] = bitsCountArr[index] ? bitsCountArr[index] + 1 : 1;
                }
            });
        })

        bitsCountArr.forEach((value) => {
            if (value > bitsArr.length / 2) {
                gammaRate += '1'
                epsilonRate += '0'
            } else {
                gammaRate += '0'
                epsilonRate += '1'
            }
        });

        return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    } catch {
        console.log('Error! No File');
    }
}

console.log(bitCalculation('input.txt'));