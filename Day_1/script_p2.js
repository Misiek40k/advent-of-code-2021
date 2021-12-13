const fs = require('fs');

const sonarSweepCalculation = () => {
    try {
        const dataArr = fs.readFileSync('input.txt', 'utf8').toString().split('\n');
        const numbersArr = dataArr.map(value => parseFloat(value));

        const sumArrayValues = (index) => {
            return numbersArr.slice(index, index + 3).reduce((acc, val) => acc + val);
        }

        let count = 0;
        let previousSum = sumArrayValues(0);

        for (const [index] of numbersArr.entries()) {
            if (index >= numbersArr.length - 2) { break; }
            const currentSum = sumArrayValues(index);

            if (previousSum < currentSum) {
                count += 1;
            }
            previousSum = currentSum;
        }
        return count;
    } catch {
        console.log('Error! No File');
    }
}

console.log(sonarSweepCalculation());