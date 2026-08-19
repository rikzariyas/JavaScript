const person ={
    Name : "Rikza",
    age : 20,
    gender : "female",
    place: "kerala"
}
console.log(person.Name) // Accessing object property use Dot notation
console.log(person["age"]) // Accessing object property using Bracket notation

person.email = "r@gmail.com" ; // Add a key-value pair 
person.course ="BCA"

person.address=person.place //Rename the key 
delete person.place
person.age = 21 // Updating the value
delete person.email // Delete the property from the object
// console.log(person.age)

person.skill= ["HTML", "CSS","JAVASCRIPT"] // Adding an array in object
person.skill.push("TYPESCRIPT") // Adding a value into an array
console.log(person.skill)
console.log(person.skill[1]) // Display a specific skill from an array using index 

person.address = {  
    city : "irinjalakuda",     
    state:"kerala",           //Inside object another object is created
    pincode:680125
}
console.log(person.address)
console.log(person.address.city) // specific value from obj

person.greet = function() {
    console.log(`hello ${this.Name}, nice to meet you`)
};
person.greet()
console.log(person)






const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota


// const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

// console.log(car.manyCars.b); // Jeep
// console.log(car[7]); // Mazda