const student = {
    name: 'kolim uddin',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
};

// way: 1
const marks = student.marks;
const math = student.marks.math; // dot notation:
// console.log(math);

// way: 2
const chemistry = student['marks']['chemistry']; // brakcet notation:
console.log(chemistry);

// way: 3
const subject = 'physics';
const subjectMarks = student.marks[subject];
// const marks2 = student.marks.subject; // wrong approch
// console.log(subjectMarks);