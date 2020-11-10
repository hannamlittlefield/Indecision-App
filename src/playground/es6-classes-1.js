const { oldlace } = require("color-name");

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. i am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description += ` Their major is ${this.major}`;
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting(); 

        if(this.homeLocation) {
            greeting += `I am visiting from ${homeLocation}.`;
        }
        return greeting;
    }
}


const me = new Traveler('Hanna Littlefield', 29, 'Boston');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other);

