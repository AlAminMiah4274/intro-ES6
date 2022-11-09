const numbers = [12, 15, 20, 25, 7, 9, 6, 45, 78, 85, 1];
const bigNum = numbers.filter(number => number > 20);
// console.log(bigNum);

const tiny = numbers.filter(number => number < 20);
// console.log(tiny);

const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'phone', price: 80000 },
    { id: 1, name: 'tablet', price: 35000 },
    { id: 1, name: 'watch', price: 23000 },
];

const expensive = products.filter(product => product.price > 10000);
console.log(expensive);