for(let i =0; i<10; i++){
    console.log("value", i)
}

let fruits = ["apple","banana","orange","grapes"];
for(let index of fruits){
console.log(index);
}

let str ="javascript"
for(let i of str){
    console.log(i)
}

let person={
    name:"rikza",
    age : 20,
    address: "kerala"
}
for (let key in person){
    console.log(key)
}

let skill = ["html","css","java","javascript"];
for(let index in skill){
console.log(index);
}

const fruits2 = ["apple", "banana", "orange"];

fruits2.forEach(function(fruit){
    console.log(fruit)
})

let i = 0
while (i <= 10) {
console.log(i)
i++
}

let i =0;
do{
    console.log(i);
    i++;
}while(i<10)

let x =17
if(x>18){
    console.log("you are adult")
}
    else{
        console.log("your are younger")
    }

