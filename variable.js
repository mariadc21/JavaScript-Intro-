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

 console.log(num1-num2);
 console.log(num1+num2);
 console.log(num1/num2);
 console.log(num1*num2);

//  Very Hard

let cal1 = prompt("Enter first number: ")
let op = prompt(" Enter operation either: +, -, *, or /")
let cal2 = prompt("Enter second number: ")
let answer;


if (op == "+"){
  answer = cal1+cal2
} else if (op == "-"){
    answer = cal1-cal2
} else if (op == "/"){
    answer= cal1/cal2
}  else if (op == "*"){
answer = cal1 * cal2
}
console.log (`The answer ${cal1} ${op} ${cal2} = ${answer}`);


