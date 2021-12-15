const fs = require('fs');

const bitCalculation = (fileName) => {
    try {
        const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n');
        const bitsArr = dataArr.map(value => value.split(''));
        let bitsCountArr = [];
        let oxygen;
        let co2;

        const recursiveCheck = (array, index, type) => {
            array.forEach(bitNumber => {
                bitNumber.forEach((number, index) => {
                    if (number === '1') {
                        bitsCountArr[index] = bitsCountArr[index] ? bitsCountArr[index] + 1 : 1;
                    }
                });
            })

            let currentArray = array.filter(value => {
                let currentMostCommonValue;
              
                switch (type) {
                    case 'oxygen': 
                        currentMostCommonValue = bitsCountArr[index] >= array.length / 2 ? '1' : '0';
                        break;
                    case 'co2': 
                        currentMostCommonValue = bitsCountArr[index] >= array.length / 2 ? '0' : '1';
                        break;
                }
                return value[index] === currentMostCommonValue;
            });

            if (currentArray.length === 1) {
                if(type === 'oxygen') {
                    oxygen = currentArray[0].join('');
                } else {
                    co2 = currentArray[0].join('');
                }
            } else {
                bitsCountArr = [];
                recursiveCheck(currentArray, index + 1, type);
            }
        };

        recursiveCheck(bitsArr, 0 ,'oxygen');
        recursiveCheck(bitsArr, 0, 'co2')
        return parseInt(oxygen,2) * parseInt(co2,2);
    } catch {
        console.log('Error! No File');
    }
}

console.log(bitCalculation('input.txt'));