const fs = require('fs');

const bitCalculation = (fileName) => {
    const dataArr = fs.readFileSync(fileName, 'utf8').toString().split('\n\n');
    const bingoNumbersArr = dataArr.splice(0, 1)[0].split(',');
    const bingoBoardsArr = dataArr.map(board => {
        return board.split('\n').map(row => row.trim().split(/\s+/));
    });
    const bingoHelperBoardsArr = bingoBoardsArr.map(board => {
        return board.map(row => row.map(() => false));
    });

    const traverseArrays = (number) => {

        for (const [boardIndex, board] of bingoBoardsArr.entries()) {
            for (const [rowIndex, row] of board.entries()) {
                for (const [rowValueIndex, value] of row.entries()) {
                    if (value === number) {
                        bingoHelperBoardsArr[boardIndex][rowIndex][rowValueIndex] = true;
                    }
                }

                if (
                    bingoHelperBoardsArr[boardIndex][rowIndex].every(value => value) ||
                    bingoHelperBoardsArr[boardIndex].every(row => {
                        for (let i = 0; i < 5; i++) {
                            return row[i];
                        }
                    })
                ) {
                    console.log('board', boardIndex, 'wygral z zagraniem', number);
                    let sum = 0;

                    bingoBoardsArr[boardIndex].forEach((x, xIndex) => {
                        x.forEach((v, vIndex) => {
                            if (!bingoHelperBoardsArr[boardIndex][xIndex][vIndex]) {
                                sum += parseInt(v);
                            }
                        });
                    });

                    console.log(parseInt(number) * sum);
                    return true;
                }
            }
        }
    }

    for (let number of bingoNumbersArr) {
        if (traverseArrays(number)) {
            break;
        }
    }
}

bitCalculation('input.txt');