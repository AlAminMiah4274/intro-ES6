const numbers = [12, 46, 56, 87];
const half = numbers.map(x => x / 2);
const thirds = numbers.map(x => x / 3);

// console.log(half);
// console.log(thirds);

const friends = ['safim rahman', 'rakib seikh', 'masum billah', 'sabbir howlader', 'rasel khan'];
const firstLetters = friends.map(f => f[0]);
// console.log(firstLetters);

const nameLengths = friends.map(f => f.length);
console.log(nameLengths);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 1, name: 'phone', price: 80000 },
    { id: 1, name: 'tablet', price: 35000 },
    { id: 1, name: 'watch', price: 45000 }
];

const items = products.map(p => p.name);
// console.log(items);
const productPrice = products.map(p => p.price);
console.log(productPrice);