const fs = require('fs');

const sonarSweepCalculation = (fileName) => {
    try {
        const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n');
        const numbersArr = dataArr.map(value => parseFloat(value));

        let count = 0;
        let previousValue = numbersArr[0];

        for (const [index, value] of numbersArr.entries()) {
            if (previousValue < value) {
                count += 1;
            }
            previousValue = numbersArr[index];
        }
        return count;
    } catch {
        console.log('Error! No File');
    }
}

console.log(sonarSweepCalculation('input.txt'));