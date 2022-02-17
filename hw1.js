// Loops
// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
let nums = [1,2,3,4,5,6,7,8,9,10,11]

for(i=0; i <= nums.length; i++){
    if(i % 2) 
    console.log(i-1)
}

console.log('-----------------')
// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0

for(i = 10; i >= 0; i--){
    console.log(i)
}
// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
for(i=0; i <= nums.length; i++){
    if(i % 2 === 0) 
    console.log('even')
    else console.log('odd')
}
 console.log('------------------------')
// for(i=0; i <= nums.length; i++){
//     if(i % 2 === 1) 
//     console.log('odd')
// }
// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10
let i = -1;
while(i <= 9){
    console.log(++i)
} ;

// 5. Look closely at the code below

const isOdd = (num) =>{
    return num % 2
}

if(isOdd(2)){
    console.log('is Odd')
} else {
    console.log('is Even')
}
console.log('Yo')

// 6. what will this log?
// is odd 
// Yo
// 7. what is the value of isOdd(2) 
// If it is divisible by 2 or in other words even
// 8. Fix the isOdd function to make this work
// Done

// Functions
// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
    const printUpTo = (num)=>{
        for(let i = 0; i<= num; i++){
            if(i %2 == 0){
            console.log(i)
            }
        }
    }
    printUpTo(10)
    printUpTo(15)
// console.log('---')
// printUpTo(6)
// 2. Write a function that takes an array and returns the sum of all the numbers
const array = [1, 2, 3, 4]; 
let sum = 0; 
for (let i = 0; i < array.length; i++) 
{ sum += array[i]; } 
console.log(sum); 
return sum

// for each loop of the same thing 
let sum = 0
let numbers = [1,2,3,4]

function getSum1(number){
numbers.forEach((number)=>{
    console.log(number)
sum += number
})
return(sum)
}
let s1 = getSum1([9,10,11])
let s2 = getSum1(numbers)

console.log(s1 +s2)
// 3. Write a function that returns the number of vowels in string

function numOfVowels(word) {
    let count = 0;
    for(i = 0; i < word.length; i++){
        if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' ){
    
        count+= 1; 
            }
        }
        return count;
    }
    console.log(numOfVowels('The Quick Brown Fox Jumped Over The Lazy Dog'))


// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
function math(operator, num1, num2) {
    if(operator === '+')
    return(num1 + num2)
    if(operator === '-')
    return(num1 - num2)
    if(operator ==='*')
    return (num1 * num2)
    if(operator === '/')
    return(num1 / num2)
        
        }
        console.log(math('+', 3, 7))
        console.log(math('*', 152358, 23048023))
        console.log(math('+', 8, 7))
// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.
const array = ['a', 'b', 'c' ,'d', 'e', 'f', 'g']
function findString(string) {
    for(i=0; i< array.length-1; i++)
    {if(string === array[i])
    {return true;}}
    return false; }
    
console.log(findString('a'))
console.log(findString('z'))
// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"
let joeShmoe = {name: 'Joe Shmoe', age: 50}

function personDescription(person){
    return (`${person.name} is ${person.age} years old`)
}
console.log(personDescription(joeShmoe))
// 7. write a function that takes an array that removes the first and last items and return that new array
let array = [1,2,3,4,5,6]

const removeFirstNLast = (array) => {
array.pop(array)
array.shift(array)
return array
}
console.log(array)
console.log(removeFirstNLast(array))
// 8. write a function that swaps the last and first items of an array 
let array = [1,2,3,4]

const swap = (array)=>{
    console.log(array)
    let firstItem = array[0]
    let lastItem = array[array.length-1]
    array[array.length-1] = firstItem
    array[0] = lastItem


}
console.log('array before swap', array)
swap(array)
console.log('array after swap', array)
// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
array = [1,2,3,4,5,6]
indexOfArray = (item) => {
    for(i = 0; i <= array.length; i++)
    {if(item === array[i])
    return array.indexOf(item)}
    return ('item not in array')

}
console.log(indexOfArray(6))

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
function getEvenOrOdd(number){
    {if(number % 2 === 0)
    return "Even"}
    return "Odd"

}
console.log(getEvenOrOdd(4))
// 11. Write a function that prints all  numbers from 0 – 10
function printToTen(){
    for(i = 0; i <= 10; i++) 
    console.log(i)
}
console.log(printToTen())

