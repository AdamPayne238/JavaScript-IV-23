// // CODE here for your Lambda Classess
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:



// #### Person
class Person {
    constructor(PersonAttributes){
        this.name = PersonAttributes.name;
        this.age =  PersonAttributes.age;
        this.location = PersonAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


// #### Instructor
class Instructor extends Person {
    constructor(InstructorAttributes){
        super(InstructorAttributes);
        this.specialty = InstructorAttributes.specialty;
        this.favLanguage =  InstructorAttributes.favLanguage;
        this.catchPhrase = InstructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}


// #### Student
class Student extends Person {
    constructor(StudentAttributes){
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
    }
    listSubjects(){
        return `${this.name}'s favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}


// #### Project Manager
class ProjectManager extends Instructor{
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes)
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject){
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
    }
}




// #### Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Dont forget the homies'
  });

  const mike = new Instructor({
    name: 'Mike',
    location: 'Florida',
    age: 55,
    favLanguage: 'English',
    specialty: 'Semiconductors',
    catchPhrase: 'dont kill my vibe'
  });

  const ted = new Instructor({
    name: 'Ted',
    location: 'Tennessee',
    age: 33,
    favLanguage: 'C#',
    specialty: 'Code Ninja',
    catchPhrase: 'Mo Money Mo Problems'
  });

// #### Student
const adam = new Student({
    name: 'Adam',
    location: 'New York',
    age: '26',
    previousBackground: 'ruler of earth',
    className: 'WEB23',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const zack = new Student({
    name: 'Zack',
    location: 'Wisconsin',
    age: '26',
    previousBackground: 'Pastor',
    className: 'DS4',
    favSubjects: ['Html', 'CSS', 'Python']
});

const rob = new Student({
    name: 'Rob',
    location: 'New Jersey',
    age: '30',
    previousBackground: 'Bartender',
    className: 'DS6',
    favSubjects: ['Html ', 'C++ ', 'Python ']
});

// #### Project Manager
const david = new ProjectManager({
    name: 'David',
    location: 'California',
    age: '25',
    specialty: 'react',
    favLanguage: 'Python',
    catchPhrase: 'Hammer Time',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

const joe = new ProjectManager({
    name: 'Joe',
    location: 'Indiana',
    age: '27',
    specialty: 'Redux',
    favLanguage: 'C#',
    catchPhrase: 'Hammer Time',
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});



//CONSOLE LOGS
//Instructor
console.log(fred.demo("Redux"));
console.log(fred.speak());
console.log(mike.demo("Redux"));
console.log(ted.speak());

//Student
console.log(adam.PRAssignment("Redux Class"));
console.log(adam.sprintChallenge("JavaScript"));
console.log(zack.PRAssignment("Redux Class"));
console.log(rob.sprintChallenge("JavaScript"));
console.log(adam.listSubjects());


//Project Manager
console.log(david.standUp("Web23"));
console.log(david.debugsCode("CSS"));
console.log(david.grade("Anatomy"));
console.log(joe.standUp("Web23"));
console.log(joe.debugsCode("CSS"));
console.log(joe.grade("Anatomy"));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
