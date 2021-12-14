const fs = require('fs');

const headingCalculation = (fileName) => {
    try {
        const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n');
        const headingsArr = dataArr.map(value => {
            return {
                direction: value.split(' ')[0],
                value: parseFloat(value.split(' ')[1]) 
            }
        });

        let horizontalPosition = 0;
        let depthPosition = 0;
        let aim = 0;

        headingsArr.forEach(heading => {
            switch (heading.direction) {
                case 'forward': 
                    horizontalPosition += heading.value;
                    if (aim !== 0) {
                        depthPosition += aim * heading.value;
                    }
                    break;
                case 'up':
                    aim -= heading.value;
                    break;
                case 'down':
                    aim += heading.value;
                    break;
            }
        });

        return horizontalPosition * depthPosition;
    } catch {
        console.log('Error! No File');
    }
}

console.log(headingCalculation('input.txt'));