function checkArgs(...args) { 
    console.log(args.length);              //2
    console.log(arguments.length);         //2
    console.log(args[0], arguments[0]);    //a, a
    console.log(args[1], arguments[1]);    //b, b
} 

function mixArgs(first, second = "b") { 
    console.log(arguments.length); 
}

function getValue() { 
    return 5; 
} 
 
function add(first, second = getValue()) { 
    return first + second; 
} 

var sum = (num1, num2) => num1 + num2; 

var getName = () => "Nicholas"; 
