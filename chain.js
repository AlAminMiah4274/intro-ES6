const users = [
    { id: 1, name: 'abul', job: 'doctor' }
];

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader' },
        { id: 2, name: 'dabul', job: 'police' }
    ]
};
const firstJob = data.data[0].job;
// console.log(firstJob);

// const user = {
//     id: 5001,
//     name: 'thomas alba edison',
//     address: {
//         street: {
//             first: '35/A kachukhet lane',
//             second: 'third floor',
//             third: 'right side'
//         },
//         postOffice: 'cantonment',
//         city: 'dhaka'
//     }
// };
// const userFloor = user.address.street.second;
// console.log(userFloor);

const user = {
    id: 5001,
    name: 'thomas alba edison',
    address: {
        street: {
            first: '35/A kachukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
};

const userLivingSide = user.address.stret?.third;
console.log(userLivingSide);