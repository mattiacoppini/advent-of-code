import BaseDay from '../base/BaseDay';
import integerList from './data/integerList';

class Day2 extends BaseDay {

    constructor() {
        super();
        this.integerList = [...integerList];
    }

    sum(firstValuePosition, secondValuePosition, outputPosition) {
        const firstValue = this.integerList[firstValuePosition];
        const secondValue = this.integerList[secondValuePosition];
        this.integerList[outputPosition] = firstValue + secondValue;
    }

    multiply(firstValuePosition, secondValuePosition, outputPosition) {
        const firstValue = this.integerList[firstValuePosition];
        const secondValue = this.integerList[secondValuePosition];
        this.integerList[outputPosition] = firstValue * secondValue;
    }

    startCalculationProgram(nounReplace, verbReplace) {
        this.integerList[1] = nounReplace;
        this.integerList[2] = verbReplace;
        let key = 0;
        while (key < this.integerList.length) {
            let opcode = this.integerList[key];
            let firstOperandPosition = this.integerList[key + 1];
            let secondOperandPosition = this.integerList[key + 2];
            let outputPosition = this.integerList[key + 3];

            switch (opcode) {
                case 1:
                    this.sum(firstOperandPosition, secondOperandPosition, outputPosition);
                    break;
                case 2:
                    this.multiply(firstOperandPosition, secondOperandPosition, outputPosition);
                    break;
                case 99:
                    key = this.integerList.length;
                    break;
            }

            key = key + 4;
        }
    }

    resetIntegerList() {
        this.integerList = [...integerList];
    }

    firstPuzzle() {
        this.startCalculationProgram(12, 2)

        return this.integerList[0];
    }

    secondPuzzle() {
        let noun = 0;
        let verb;
        while (noun <= 99) {

            verb = 0;
            while (verb <= 99) {
                this.resetIntegerList();
                this.startCalculationProgram(noun, verb)
                if (this.integerList[0] === 19690720) {
                    return 100 * noun + verb
                }
                verb++
            }
            noun++;
        }
    }
}

export default Day2