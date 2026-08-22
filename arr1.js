// ===============================
// MORE ARRAY METHODS
// ===============================

let numbers = [10, 20, 30, 40, 50]


// includes()
// Check whether an array contains a particular value

console.log(numbers.includes(30))
// true

console.log(numbers.includes(100))
// false


// indexOf()
// Return the index of the first matching value

console.log(numbers.indexOf(30))
// 2

console.log(numbers.indexOf(100))
// -1


// lastIndexOf()
// Return the index of the last matching value

let values = [10, 20, 30, 20, 40]

console.log(values.lastIndexOf(20))
// 3


// at()
// Return the element at a particular index

console.log(numbers.at(2))
// 30

console.log(numbers.at(-1))
// 50


// concat()
// Combine two or more arrays

let a = [1, 2, 3]
let b = [4, 5, 6]

let combined = a.concat(b)

console.log(combined)
// [1, 2, 3, 4, 5, 6]


// flat()
// Convert nested arrays into a single array

let nested = [1, 2, [3, 4], [5, 6]]

console.log(nested.flat())
// [1, 2, 3, 4, 5, 6]


// map()
// Create a new array by applying a function to every element

let num = [1, 2, 3, 4, 5]

let doubled = num.map(function(value) {
    return value * 2
})

console.log(doubled)
// [2, 4, 6, 8, 10]


// filter()
// Create a new array containing only elements
// that satisfy a condition

let even = num.filter(function(value) {
    return value % 2 === 0
})

console.log(even)
// [2, 4]


// find()
// Return the first element that satisfies a condition

let result = num.find(function(value) {
    return value > 2
})

console.log(result)
// 3


// findIndex()
// Return the index of the first element
// that satisfies a condition

let resultIndex = num.findIndex(function(value) {
    return value > 2
})

console.log(resultIndex)
// 2


// some()
// Check if at least one element satisfies a condition

let checkSome = num.some(function(value) {
    return value > 4
})

console.log(checkSome)
// true


// every()
// Check if every element satisfies a condition

let checkEvery = num.every(function(value) {
    return value > 0
})

console.log(checkEvery)
// true


// forEach()
// Execute a function for each element

num.forEach(function(value) {
    console.log(value)
})

// Output:
// 1
// 2
// 3
// 4
// 5


// reduce()
// Reduce all array values into a single value

let total = num.reduce(function(sum, value) {
    return sum + value
}, 0)

console.log(total)
// 15


// reduceRight()
// Reduce array values from right to left

let nums = [1, 2, 3, 4]

let resultRight = nums.reduceRight(function(result, value) {
    return result - value
})

console.log(resultRight)
// -2


// join()
// Convert array elements into a string
// and separate them using the given separator

let fruits = ["apple", "banana", "orange"]

console.log(fruits.join("-"))
// apple-banana-orange


// toString()
// Convert array into a comma-separated string

console.log(fruits.toString())
// apple,banana,orange


// slice()
// Create a copy/portion of an array
// Does NOT change the original array

let original = [10, 20, 30, 40, 50]

let copied = original.slice(1, 4)

console.log(copied)
// [20, 30, 40]


// splice()
// Add, remove, or replace elements
// Changes the original array

let colors = ["red", "blue", "green", "yellow"]

let removed = colors.splice(1, 2)

console.log(removed)
// ["blue", "green"]

console.log(colors)
// ["red", "yellow"]


// splice() - Add elements

let fruits2 = ["apple", "banana", "orange"]

fruits2.splice(1, 0, "mango")

console.log(fruits2)
// ["apple", "mango", "banana", "orange"]


// splice() - Replace elements

let fruits3 = ["apple", "banana", "orange"]

fruits3.splice(1, 1, "mango")

console.log(fruits3)
// ["apple", "mango", "orange"]


// sort()
// Sort elements

let names = ["Riza", "Anu", "John", "David"]

names.sort()

console.log(names)
// ["Anu", "David", "John", "Riza"]


// Numeric sort
// By default sort() treats values as strings

let numbers2 = [100, 5, 25, 10]

numbers2.sort(function(a, b) {
    return a - b
})

console.log(numbers2)
// [5, 10, 25, 100]


// reverse()
// Reverse the order of array elements

let letters = ["a", "b", "c", "d"]

letters.reverse()

console.log(letters)
// ["d", "c", "b", "a"]


// Array.isArray()
// Check whether a value is an array

console.log(Array.isArray([1, 2, 3]))
// true

console.log(Array.isArray(10))
// false


// Array.from()
// Create an array from an iterable or array-like value

let word = "HELLO"

console.log(Array.from(word))
// ["H", "E", "L", "L", "O"]


// Array.of()
// Create an array from given values

let newArray = Array.of(10, 20, 30)

console.log(newArray)
// [10, 20, 30]