var person = { 
    name: "Nicholas", 
    sayName: function() { 
        console.log(this.name); 
    } 
}; 

var lastName = "last name"; 
var person = { 
    "first name": "Nicholas", 
    [lastName]: "Zakas" 
}; 
    
console.log(person["first name"]);      // "Nicholas" 
console.log(person[lastName]);  

console.log(+0 == -0);              // true 
console.log(+0 === -0);             // true 
console.log(Object.is(+0, -0));     // false 
    
console.log(NaN == NaN);            // false 
console.log(NaN === NaN);           // false 
console.log(Object.is(NaN, NaN));   // true 
    
console.log(5 == 5);                // true 
console.log(5 == "5");              // true 
console.log(5 === 5);               // true 
console.log(5 === "5");             // false 
console.log(Object.is(5, 5));       // true 
console.log(Object.is(5, "5"));     // false 

var receiver = {};
Object.assign(receiver,
    {
        type: "js",
        name: "file.js"
    },
    {
        type: "css"
    }
);

let person = { 
    getGreeting() { 
        return "Hello"; 
    } 
}; 
 
let dog = { 
    getGreeting() { 
        return "Woof"; 
    } 
}; 
 
 
let friend = { 
    getGreeting() { 
        return Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!"; 
    } 
}; 
 
// set prototype to person 
Object.setPrototypeOf(friend, person); 
console.log(friend.getGreeting());                      // "Hello, hi!" 
console.log(Object.getPrototypeOf(friend) === person);  // true 
 
// set prototype to dog 
Object.setPrototypeOf(friend, dog); 
console.log(friend.getGreeting());                      // "Woof, hi!" 
console.log(Object.getPrototypeOf(friend) === dog);     // true 