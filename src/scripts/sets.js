let set = new Set([1, 2]); 
 
set.forEach(function(value, key, ownerSet) { 
    console.log(key + " " + value); 
    console.log(ownerSet === set); 
}); 

let set2 = new Set([1, 2, 3, 3, 3, 4, 5]), 
array = [...set2]; 

let map2 = new Map(); 
map2.set("title", "Understanding ES6"); 
map2.set("year", 2016); 
    
console.log(map2.get("title"));      // "Understanding ES6" 
console.log(map2.get("year"));       // 2016 

let map = new Map(); 
map.set("name", "Nicholas"); 
map.set("age", 25); 
    
console.log(map.size);          // 2 
    
console.log(map.has("name"));   // true 
console.log(map.get("name"));   // "Nicholas" 
    
console.log(map.has("age"));    // true 
console.log(map.get("age"));    // 25 
    
map.delete("name"); 
console.log(map.has("name"));   // false 
console.log(map.get("name"));   // undefined 
console.log(map.size);          // 1 
    
map.clear(); 
console.log(map.has("name"));   // false 
console.log(map.get("name"));   // undefined 
console.log(map.has("age"));    // false 
console.log(map.get("age"));    // undefined 
console.log(map.size);          // 0 


let key1 = {}, 
key2 = {}, 
weakmap = new WeakMap([[key1, "Hello"], [key2, 42]]); 
 
console.log(weakmap.has(key1));     // true 
console.log(weakmap.get(key1));     // "Hello" 
console.log(weakmap.has(key2));     // true 
console.log(weakmap.get(key2));     // 42 