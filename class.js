// syntactic sugar
// class Instructor {
//     name;
//     designation = 'Web Course Instructor';
//     team = 'Web Team';
//     location;
//     constructor(name, location) {
//         this.name = name;
//         this.location = location;
//     }
//     sartSupportSession(time) {
//         console.log(`Start the support session at ${time}`);
//     };
//     createQuiz(module) {
//         console.log(`Please create quiz for module ${module}`);
//     }
// };

// const aamir = new Instructor('aamir', 'mumbai');
// console.log(aamir);

// aamir.sartSupportSession('9.00 PM');
// aamir.createQuiz(60);

// const solaiman = new Instructor('solaiman', 'dhaka');
// console.log(solaiman);

// ********************** //

class Instructor {
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create a quiz for module ${module}`);
    }
};

const mehedi = new Instructor('Mehedi Sarkar', 'Nikunjo');
console.log(mehedi);
mehedi.createQuiz(73);

const nayem = new Instructor('Nayem Ahnaf', 'Uttara');
console.log(nayem);
nayem.startSupportSession('9.00 PM');