import BaseDay from '../base/BaseDay';
import moduleMassesArray from './data/moduleMasses';

class Day1 extends BaseDay {

    constructor() {
        super();
        this.moduleMasses = moduleMassesArray;
    }

    calculateFuel(mass) {
        return Math.floor(mass / 3) - 2;
    }

    advancedFuelCalculation(mass) {
        const calculatedFuel = this.calculateFuel(mass);
        const additionalFuel = (calculatedFuel > 0) ? this.advancedFuelCalculation(calculatedFuel) : 0;

        return additionalFuel + ((calculatedFuel > 0) ? calculatedFuel : 0);
    }

    firstPuzzle() {
        return this.moduleMasses
            .reduce((totalFuel, mass) => totalFuel + this.calculateFuel(mass), 0)
    }

    secondPuzzle() {
        return this.moduleMasses
            .reduce((totalFuel, mass) => totalFuel + this.advancedFuelCalculation(mass), 0)
    }
}

export default Day1