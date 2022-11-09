const numbers = [15, 6, 7, 5, 9, 89, 35, 25, 1];
const fives = numbers.find(number => number % 5 === 0);
const fivesAll = numbers.filter(number => number % 5 === 0);

// console.log(fives);
// console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'mobile', price: 80000 },
    { id: 1, name: 'tablet', price: 30000 },
    { id: 1, name: 'watch', price: 23000 }
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);