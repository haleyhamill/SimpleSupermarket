// class definition
class User {
    constructor(firstName, lastName, preF, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.preF = preF;
        this.age = age;
    }

    getFullName() {
        return `${this.preF}. ${this.firstName} ${this.lastName}`
    }

    canVote() {
        return this.age >= 18;
    }
}


// Sample usage - do not modify
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false