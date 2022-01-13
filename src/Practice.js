class MobilePhone {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getDescription() {
        return `The ${this.name} costs ${this.price}`;
    }
}

class Android extends MobilePhone {
    getVersion() {
        return 12;
    }
}

class iOS extends MobilePhone {
    getVersion() {
        return 15;
    }
}

// Sample usage - do not modify
const galaxy = new Android("Galaxy", 400);
console.log(galaxy.getDescription()); // "The Galaxy costs 400"
console.log(galaxy.getVersion()); // 12 (always for android phones)
const iphone = new iOS("iPhone", 500);
console.log(iphone.getDescription()); // "The iPhone costs 500"
console.log(iphone.getVersion()); // 15 (always for iOS phones)