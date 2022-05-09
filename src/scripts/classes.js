class PersonClass { 
    //constructor 
    constructor(name) { 
        this.name = name; 
    } 
 
    //function to return the name 
    sayName() { 
        console.log(this.name); 
    } 
} 
 
let person = new PersonClass("Nicholas"); 
person.sayName();   // outputs "Nicholas" 
 
console.log(person instanceof PersonClass);     // true 
console.log(person instanceof Object);          // true 
 
console.log(typeof PersonClass);                    // "function"


let person2 = new class { 
 
    constructor(name) { 
        this.name = name; 
    } 
 
    sayName() { 
        console.log(this.name); 
    } 
 
}("Nicholas"); 

person2.sayName();       // "Nicholas" 







class Rectangle { 
    constructor(length, width) { 
        this.length = length; 
        this.width = width; 
    } 
 
    getArea() { 
        return this.length * this.width; 
    } 
} 
 
class Square extends Rectangle { 
    constructor(length) { 
         super(length, length); 
    } 
} 
 
var square = new Square(3); 
 
console.log(square.getArea());              // 9 
console.log(square instanceof Square);      // true 
console.log(square instanceof Rectangle);   // true 




