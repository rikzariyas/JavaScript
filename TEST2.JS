// for loop
for(let i =1; i<=10; i++){
console.log(i);
}
for(let i =1; i<=5 ; i++){
    console.log("hello world!");
}

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
let fruit = ["apple","banana","orange","grapes"];
for(let fruit of fruits){
console.log(fruit);
}

// for in loop
 let person = {
    name: "Rikza",
    age: 22,
    city: "Kerala"
 };
for(let key in person){
console.log(key);
console.log(person[key]);
 }

//Foreach in loop
const fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit) {
    console.log(fruit);
});
