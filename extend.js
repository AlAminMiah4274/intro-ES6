class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
}
class Instructor extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`);
    }
};


class Developer extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`Please relase the version ${version}`);
    }
};


class JobPlacement extends TeamMember {
    designation = 'Job Placement Commandos';
    team = 'Job Placement';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(time) {
        console.log(`Start the support session at ${time}`);
    }
    prepareStudent(module) {
        console.log(`Please create quiz for module ${module}`);
    }
};

const alia = new Developer('Alia Bhatt', 'Mumbai', 'React');
console.log(alia);
alia.provideFeedback();
const bipasha = new JobPlacement('Bipasha', 'Kolkata', 'India');
console.log(bipasha);