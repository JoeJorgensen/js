const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

console.log('return of forEach')
// forEach**
// goes through each thing and performs function
// returns undefined
let returnValueMap = characters.map(((c)=>{
    return {name:c.name, eye_color:c.eye_color}
}))
console.log('return of Map')
console.log(returnValueMap)
//***MAP***
// goes through each thing and performs function
//1. Get array of all names
let returnName = characters.map(((c)=>{
    return {name: c.name}
}))
console.log('return of Name')
console.log(returnName)
//2. Get array of all heights
let returnHeight= characters.map(((c)=>{
    return {height: c.height}
}))
console.log('return of Height')
console.log(returnHeight)
//3. Get array of objects with just name and height properties

let returnNameAndHeight= characters.map(((c)=>{
    return {name: c.name, height: c.height}
}))
console.log('return of Name and Height')
console.log(returnNameAndHeight)
//4. Get array of all first names
let returnFirstName = characters.map(((c)=>{
    return {First_name: c.name.split(' ')[0]}
}))
console.log('return of First Name')
console.log(returnFirstName)

//***REDUCE***
let nums = [2,3,4,5,6]
let sum = nums.reduce((accum, num)=>{
    console.log('accum:', accum)
    console.log('num', num)
    return accum + num
},0)
console.log(sum)

// goes through each thing and performs function
// This function has two param, the return value of the previous
// 
//1. Get total mass of all characters
let totalMass = characters.reduce((accum,characterWeight)=>{
    console.log('accum', accum)
    console.log('returnMass', characterWeight.mass)
    return accum + characterWeight.mass
}, 0)
console.log(totalMass)
//2. Get total height of all characters
let totalHeight = characters.reduce((accum,characterHeight)=>{
    console.log('accum', accum)
    console.log('returnHeight', characterHeight.height)
    return accum + characterHeight.height
}, 0)
console.log(totalHeight)
//3. Get total number of characters by eye color
let totalCharacters = characters.reduce((accum,totalCharacters) =>{
    if(characters.eye_color === characters.eye_color)
    accum += 1
    return accum
 }, 0)
 console.log(totalCharacters)
//4. Get total number of characters in all the character names
let characterAmount = characters.reduce((accum, c)=>{
    return accum + c.name.length-1
},0)
console.log(characterAmount)
//***FILTER***
// REMOVES ITEMS
// goes through each thing and performs function
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESN'T

//1. Get characters with mass greater than 100
let over100 = characters.filter((c)=>{
    return c.mass >=100
})
console.log('return of filter')
console.log(over100)
console.log(characters)
//2. Get characters with height less than 200
let less200 = characters.filter((c)=>{
    return c.height <200
})
console.log('return of filter height')
console.log(less200)

//3. Get all male characters
let male = characters.filter((c)=>{
    return c.gender === 'male'
})
console.log('return of filter male')
console.log(male)
//4. Get all female characters


// FIND
let firstOver100 = characters.find((c)=>{
    return c.mass >=100
})
console.log('return of filter')
console.log(firstOver100)

//***SORT***
characters.sort((a,b)=>{
    return a.height - b.height
})
console.log(characters)
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own
