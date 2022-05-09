function createIterator(items) { 
    var i = 0; 
    
    return { 
        next: function() { 
            var done = (i >= items.length); 
            var value = !done ? items[i++] : undefined; 
    
            return { 
                done: done, 
                value: value 
            }; 
        } 
    }; 
} 
    
var iterator = createIterator([1, 2, 3]); 
    
console.log(iterator.next());           // "{ value: 1, done: false }" 
console.log(iterator.next());           // "{ value: 2, done: false }" 
console.log(iterator.next());           // "{ value: 3, done: false }" 
console.log(iterator.next());           // "{ value: undefined, done: true }" 
    
// for all further calls 
console.log(iterator.next());           // "{ value: undefined, done: true }" 


function *createIterator(items) { 
    for (let i = 0; i < items.length; i++) { 
        yield items[i]; 
    } 
} 
    
let iterator2 = createIterator([1, 2, 3]); 
    
console.log(iterator2.next());           // "{ value: 1, done: false }" 
console.log(iterator2.next());           // "{ value: 2, done: false }" 
console.log(iterator2.next());           // "{ value: 3, done: false }" 
console.log(iterator2.next());           // "{ value: undefined, done: true }" 
    
// for all further calls 
console.log(iterator2.next());           // "{ value: undefined, done: true }" 


function *createIterator() { 
    yield 1; 
    return; 
    yield 2; 
    yield 3; 
} 
 
let iterator3 = createIterator(); 
 
console.log(iterator3.next());           // "{ value: 1, done: false }" 
console.log(iterator3.next());           // "{ value: undefined, done: true }"


let colors = [ "red", "green", "blue" ]; 
let tracking = new Set([1234, 5678, 9012]); 
let data = new Map(); 
    
data.set("title", "Understanding ECMAScript 6"); 
data.set("format", "ebook"); 
    
for (let entry of colors.entries()) { 
    console.log(entry); 
} 
    
for (let entry of tracking.entries()) { 
    console.log(entry); 
} 
    
for (let entry of data.entries()) { 
    console.log(entry); 
} 


let map = new Map([ ["name", "Nicholas"], ["age", 25]]), 
    array = [...map]; 
    
console.log(array); 