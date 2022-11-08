// 1. var, let and const
const numbers = [15, 54, 62, 25];
console.log(numbers);

let salary = 500000;
salary = 800000;
console.log(salary);

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = remaining + bonus;
    return total;
}

// 3. template string/literal
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`
console.log(elementHTML);

// 4. arrow function
const doubleIt = x => x * 2;

const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

// 5. spread operator
const ages = [12, 15, 11, 13, 16, 17];
const newAges = [...ages, 19, 21, 23, 20];

// 6. destructuring
const { x, y, z, ...c } = { x: 45, y: 12, z: 33, name: 'sakib al hasan', salary: 450000 };

const [a, b, d, ...f] = [12, 15, 45, 30, 80];