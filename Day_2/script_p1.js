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

        headingsArr.forEach(heading => {
            switch (heading.direction) {
                case 'forward': 
                    horizontalPosition += heading.value;
                    break;
                case 'up':
                    depthPosition -= heading.value;
                    break;
                case 'down':
                    depthPosition += heading.value;
                    break;
            }
        });

        return horizontalPosition * depthPosition;
    } catch {
        console.log('Error! No File');
    }
}

console.log(headingCalculation('inputTest.txt'));