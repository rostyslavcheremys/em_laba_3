import { calculateMean, calculateMedian, calculateMode } from './ functions/functions.js';
import { modeFunction } from "./test/modeFunction.js";

const studentNumber  = 29;
const number = studentNumber + 10;
const maxValue = 1 + studentNumber;

function generateRandomSequence(number, maxValue) {
    const array = [];

    for (let i = 0; i < number; i++) {
        const value = Math.floor(Math.random() * maxValue) + 1;
        array.push(value);
    }

    return array;
}

const sequence = generateRandomSequence(number, maxValue);
console.log("\nПочаткова послідовність:", sequence.join(", "));

const sortedSequence = [...sequence].sort((a, b) => a - b);
console.log("\nВпорядкована послідовність:", sortedSequence.join(", "));

console.log("\nСереднє арифметичне:", calculateMean(sequence).toFixed(2));
console.log("Медіана:", calculateMedian(sequence));
console.log("Мода:", calculateMode(sequence));

modeFunction();