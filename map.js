const numbers = [2, 4, 5, 8, 9, 7];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}

// console.log(output);

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = number * 2;
        output.push(doubled);
    }
    return output;
}

const result = getDoubles(numbers);
console.log(result);