const fs = require('fs');

const headingCalculation = (fileName) => {
    try {
        const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n');
        const headingsArr = dataArr.map(value => {
            return {
                direction: value.split(' ')[0],
                value: parseInt(value.split(' ')[1], 10) 
            }
        });

        let horizontalPosition = 0;
        let depthPosition = 0;
        let aim = 0;

        headingsArr.forEach(({direction, value}) => {
            switch (direction) {
                case 'forward': 
                    horizontalPosition += value;
                    if (aim !== 0) {
                        depthPosition += aim * value;
                    }
                    break;
                case 'up':
                    aim -= value;
                    break;
                case 'down':
                    aim += value;
                    break;
            }
        });

        return horizontalPosition * depthPosition;
    } catch {
        console.log('Error! No File');
    }
}

console.log(headingCalculation('input.txt'));