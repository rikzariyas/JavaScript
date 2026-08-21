const fruit = ["apple","banana","orange","grapes",123]

fruit.push("strawberry") // Add a new value to array
console.log(fruit.toString()); //Return a string with array values separated by commas --> apple,banana,orange,grapes,123,strawberry

console.log(fruit.join()) //apple,banana,orange,grapes,123,strawberry
console.log(fruit.join("")) //applebananaorangegrapes123strawberry
console.log(fruit.join("-"))//apple-banana-orange-grapes-123-strawberry

console.log(fruit.pop())//Remove the last element
console.log(fruit.push("strawberry","pineapple"))//Add the element to array
console.log(fruit.shift())//Remove the first element
console.log(fruit.unshift("apple","avocado"))//Add element to the beginning of the array
delete fruit[1] //'apple', <1 empty item>,'banana'....
fruit.sort() //sort in alpha order
// console.log( fruit.isArray("apple"))

let num =[1,2,3,4,5,6]
let num2 = num.slice(1,5) // slice make a copy of array and make changes
let num3 = num.splice(1,5) // this will effect orginal array 
num.reverse() //reverse
console.log(Array.isArray(10))
console.log(num)
console.log(num2)
console.log(num3)
console.log(typeof(fruit[4]))
console.log(fruit)