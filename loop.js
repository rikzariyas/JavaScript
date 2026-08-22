//if condition
let age = 20; 
if (age >= 18) { 
    console.log("You are an adult");
}

// if else condition
let age = 16; 
if (age >= 18) { 
    console.log("You are an adult"); 
} else { 
    console.log("You are a minor"); 
}

//else if condition
let marks = 75; 
if (marks >= 90) { 
    console.log("A+ Grade"); 
} else if (marks >= 75) { 
    console.log("A Grade"); 
} else if (marks >= 50) { 
    console.log("B Grade"); 
} else { 
    console.log("Fail");
}

// for loop
for(let i =1; i<=10; i++){
console.log(i);
}
for(let i =1; i<=5 ; i++){
    console.log("hello world!");
}

//switch condition
//Compares one value with multiple cases.
let day = 2; 
switch (day) { 
    case 1: console.log("Monday"); 
    break;  //Completely stops a loop or switch.
    case 2: console.log("Tuesday");
    break; 
    case 3: console.log("Wednesday"); 
    break; 
    default: console.log("Invalid day");
}

//continue -> Skips the current loop iteration and continues with the next one.

// while loop
let i = 1
while(i<=10){
    console.log(i)
    i++
}

// do while loop
let x=1;
do{
    console.log(x);
    x++;
}while(x<=10);

// for of loop

let str ="javascript"
for(let i of str){         //using string
    console.log(i)
}

let fruit = ["apple","banana","orange","grapes"];
for(let fruit of fruits){      //using array
console.log(fruit);
}

// for in loop
 let person = {
    name: "Rikza",
    age: 22,               //in object
    city: "Kerala"
 };
for(let key in person){
console.log(key);
console.log(person[key]);
 }

 let skill = ["html","css","java","javascript"];
for(let index in skill){               // in array
console.log(index);
}

//Foreach in loop
const fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
