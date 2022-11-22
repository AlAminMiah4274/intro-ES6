// problem: 1
const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map(number => number + 1);
// console.log(evenArray);

// problem: 2
const say = [33, 50, 79, 78, 90, 101, 30];
const divisibleNumber = say.filter(number => number % 10 === 0);
// console.log(divisibleNumber);

// problem: 3
const say2 = [33, 50, 79, 78, 90, 101, 30];
const divisible = say2.find(number => number % 10 === 0);
// console.log(divisible);

// problem: 4
const number = [1, 9, 17, 22];
const add = number.reduce((previous, current) => previous + current, 0);
// console.log(add);

let sum = 0;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum = sum + element;
}
// console.log(sum);

// problem: 5
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
];

const sumAge = people.reduce((previous, current) => previous + current.age, 0);
// console.log(sumAge);


let addition = 0;
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    addition += element.age;
}
// console.log(addition);

// problem: 6
const student = {
    name: 'Fredie',
    age: 26
};
// const age = student.age;
const age = student['age'];
// console.log(age);

// problem: 7
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hydrabad',
            country: 'India'
        }
    ]
};

// const city = data.location[0].city;
const city = data.location[0]['city'];
// console.log(city);

// problem: 8
const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenbrough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-801 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layerd Client-server neural-net',
        bs: 'harness real-time e-markets'
    }
};

const email = user.email;
// console.log(email);

const address = user.address;
// console.log(address);

const city2 = user.address.city;
// console.log(city2);

const latitude = user.address.geo.lat;
// console.log(latitude);

const companyName = user.company.name;
// console.log(companyName);

const product = {
    name: 'Laptop',
    model: 'Yoga 3',
    price: 49000,
    dusk: '512SSD'
};
const { price } = product;
console.log(price);