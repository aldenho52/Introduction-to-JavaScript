/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 25;
if (votingAge > 18) {
    console.log(true)
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variable = 15;
variable = 19;

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = '1999'
console.log(Number(str))


//Task d: Write a function to multiply a*b 

let multiply = function (a, b) {
    return a*b
}

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

let age = 7
const findDogYears = function (age) {
    let dogYears = (age * 7)
    return dogYears
}

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

const findFeedingAmount = function (dogYears, weight) {
    let month = 1/12;
    if (dogYears >= 1 && weight <= 5) {
        return(weight * 0.05)
    } else if (dogYears >= 1 && weight <= 10) {
        return(weight * 0.04)
    } else if (dogYears >= 1 && weight <= 15) {
        return(weight * 0.03)
    } else if (dogYears >= 1 && weight > 15) {
        return(weight * 0.02)
    } else if (dogYears >= (month*2) && dogYears <= (month*4)) {
        return (weight * .1)
    } else if (dogYears > (month*4) && dogYears <= (month*7)) {
        return (weight * .05)
    } else  {
        return (weight * .04)
    }
}

console.log(findFeedingAmount(1, 15))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const choice = function () {
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
} 

    const computerChoice = function () {
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
} 

const rps = function (choice, computerChoice) {
      if (choice === 'paper' && computerChoice === 'rock') {
        return 'Your paper beats comps rock, you win!'
    } else if (choice === 'paper' && computerChoice === 'scissors') {
        return 'Your paper loses to comps scissors, you lose!'
    } else if (choice === 'rock' && computerChoice === 'paper') {
        return 'Your rock loses to comps paper, you lose!'
    } else if (choice === 'rock' && computerChoice === 'scissors') {
        return 'Your rock beats comps scissors, you win!'
    } else if (choice === 'scissors' && computerChoice === 'paper') {
        return 'Your scissors beats comps paper, you win!'
    } else if (choice === 'scissors' && computerChoice === 'rock') {
        return 'Your scissors loses to comps rock, you lose!'
    } else {
        return 'Draw, play again!'
    }
}

let determineWinner = rps(choice(), computerChoice())
// console.log(determineWinner)

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const kilometersToMiles = (kilometers) => {
    return `${kilometers} is ${(kilometers * 0.621371)} miles.`
}

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetConversion = (feet) => {
    return `${feet} is ${(feet * 30.48)} centimeters.` 
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
let annoyingSong = (num) => {
    for (i = num; i >= 0; i--) {
        console.log(`${i} bottles of soda on the wall, ${i} bottles of soda, take one down pass it around ${i-1} bottles of soda on the wall`)
    }
}

// annoyingSong(10)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const gradeCalc = (score) => {
    if (score >= 90) {
        return `You got a A!`
    } else if (score >= 80) {
        return `You got a B!`
    } else if (score >= 70) {
        return `You got a C!`
    } else if (score >= 60) {
        return `You got a D!`
    } else {
        return `You got a F!`
    }
}  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method


let vowelCount = (str) => {
  var vowelList = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str.length ; x++)
  {
    if (vowelList.indexOf(str[x]) !== -1)
    {
      vcount += 1;
    }
  }
  return vcount;
}

console.log(vowelCount("dad"))

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



alert('welcome to rock paper scissors!')

let enterGame = prompt('Please pick rock, paper, or scissors')



const rpsWindowObject = function (enterGame, computerChoice) {
    if (enterGame === 'paper' && computerChoice === 'rock') {
      return 'Your paper beats comps rock, you win!'
  } else if (enterGame === 'paper' && computerChoice === 'scissors') {
      return 'Your paper loses to comps scissors, you lose!'
  } else if (enterGame === 'rock' && computerChoice === 'paper') {
      return 'Your rock loses to comps paper, you lose!'
  } else if (enterGame === 'rock' && computerChoice === 'scissors') {
      return 'Your rock beats comps scissors, you win!'
  } else if (enterGame === 'scissors' && computerChoice === 'paper') {
      return 'Your scissors beats comps paper, you win!'
  } else if (enterGame === 'scissors' && computerChoice === 'rock') {
      return 'Your scissors loses to comps rock, you lose!'
  } else {
      return 'Draw, play again!'
  }
}

if (enterGame === 'rock' || enterGame === 'paper' || enterGame === 'scissors') {
    let decision = rpsWindowObject(enterGame, computerChoice)
    alert(decision)
}