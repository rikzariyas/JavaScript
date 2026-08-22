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
