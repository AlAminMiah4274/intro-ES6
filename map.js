/*
1. get an array
2. fot every elements of the array do something
3. store the result in a array
4. return the result array
*/

const numbers = [2, 4, 5, 8, 9, 7];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }

// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// function doubleItOld(num) {
//     return num * 2;
// }

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
// console.log(result);

// map: 1
const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);

// map: 2
const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);

// map: 3
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDouble2);


// practice:*****************
const newNumbers = [3, 5, 7, 9];

const multiply = newNumbers.map(x => x * 2);
// console.log(multiply);

const add = newNumbers.map(x => x + 1);
// console.log(add);

const subtraction = newNumbers.map(x => x - 1);
// console.log(subtraction);

const divide = newNumbers.map(x => x / 1);
console.log(divide);