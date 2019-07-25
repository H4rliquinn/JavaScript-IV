// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name=attr.name,
        this.age=attr.age,
        this.location=attr.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
};
class Instructors extends Person{
    constructor(attr){
        super(attr),
        this.specialty=attr.specialty,
        this.favLanguage=attr.favLanguage,
        this.catchPhrase=attr.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(studentObj,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
};
class Students extends Person{
    constructor(attr){
        super(attr),
        this.previousBackground=attr.previousBackground,
        this.className=attr.className,
        this.favSubjects=attr.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach((item)=>{console.log(item);});
    }
    PRAssignment(subject){
        console.log(`student.name has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject){
        console.log(`student.name has begun sprint challenge on ${subject}`);
    }
};
//Formerly ProjectManagers
class TeamLeads extends Instructors{
    constructor(attr){
        super(attr),
        this.gradClassName=attr.gradClassName,
        this.favInstructor=attr.favInstructor
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(studentObj, subject){
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`);
    }
};

const instructor = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const Student = new Students({
    name: 'Jason',
    location: 'New Jersey',
    age: 42,
    previousBackground:"Sales",
    className:"WEB22",
    favInstructor:"All of them",
    favSubjects:"Python"

});
const TeamLead = new TeamLeads({
    name: 'St Lachman',
    location: 'Lambdaville',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Team Leadin',
    catchPhrase: `Emojis for attendance`,
    gradClassName:"WEB19",
    favInstructor:"Dan Frehner"
});

instructor.speak();
console.log({instructor,Student,TeamLead});



