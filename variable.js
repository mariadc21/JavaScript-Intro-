// Very Easy

var num1= 6;
var num2= 2;
var num3= num1 - num2;
console.log(` The difference between ${num1} and ${num2} is ${num3}`)

// Easy 
var person1="Thomas";
var person2= "John";

if(person1.length > person2.length){
    console.log(`the name ${person1} is longer than ${person2} by ${person1.length - person2.length} characters `)
} else if (person2.length > person1.length){
    console.log(`the name ${person2} is longer than ${person1} by ${person2.length - person1.length} characters `)
}
// MEDIUM:
let type = prompt("Please type something:")
 if (type == type.toUpperCase()){
    console.log (`You are shouting`);
 }else if(type == type.toLowerCase()){
    console.log(`You are whispering`);
 }else{console.log `You are talking normal`};

//  Hard
 var num1= 8;
 var num2= 2;

function add1(){
    console.log(num1+num2)
}
function sub1(){
    console.log(num1-num2)
}
function mul1(){
    console.log(num1*num2)
}
function div1(){
    console.log(num1/num2)
}
add1();
sub1();
mul1();
div1();

//  Very Hard

function calculator(){
    let cal1 = prompt("Enter first number: ")
    let x= parseInt(cal1);
    let op = prompt(" Enter operation either: +, -, *, or /")
    let cal2 = prompt("Enter second number: ")
    let y= parseInt(cal2);
    let answer;
    
    function add(){
        answer = x+y
    }
    function sub(){
        answer = x-y
    }
    function mult(){
        answer = x*y
    }
    function divide(){
        answer = x/y
    }

if (op == "+"){
   add();
} else if (op == "-"){
   sub();
} else if (op == "/"){
    divide();
} else if (op == "*"){
    mult();
} else console.log(`error`)
console.log (`The answer ${cal1} ${op} ${cal2} = ${answer}`);
var use =[]
let cont = prompt("Use calculator?: Y/N")
use.push(cont);

if(use.indexOf("Y") == 0 ) {
    calculator()
} else console.log (`Have a nice day. Bye`)
}
var use =[]
let cont = prompt("Use calculator?: Y/N")
use.push(cont);

if(use.indexOf("Y") == 0 ) {
    calculator()
} else console.log (`Have a nice day. Bye`)
