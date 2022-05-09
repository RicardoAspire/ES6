let promise = readFile("example.txt");  

promise.then(function(contents) { 
    // fulfillment 
    console.log(contents); 
}, function(err) { 
    // rejection 
    console.error(err.message); 
}); 
 
promise.then(function(contents) { 
    // fulfillment 
    console.log(contents); 
}); 
 
promise.then(null, function(err) { 
    // rejection 
    console.error(err.message); 
}); 



let promise2 = new Promise(function(resolve, reject) { 
    throw new Error("Explosion!"); 
}); 
 
promise2.catch(function(error) { 
    console.log(error.message);     // "Explosion!" 
}); 


let promise3 = Promise.reject(42); 
                             
    promise3.catch(function(value) { 
        console.log(value);         // 42 
    }); 

let promise4 = Promise.resolve(42); 
                             
    promise4.then(function(value) { 
        console.log(value);         // 42 
    }); 