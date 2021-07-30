
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE
let num1 = 5
let num2 = 4
let sum = ( num1 + num2) 

if( num1 + num2){ 
  console.log("num1 + num2 ")
}
console.log(sum)


//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE
let number= 10
let greaterThanFive = (number)
if(number > 5){
  greaterThanFive = "true"
} else{
  greaterThanFive="false"
}

console.log(greaterThanFive)

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE

let word= `zebra`
function findZWords(word){ 
  if(word = "z"){
    console.log(`${word} starts with z`)
  } else{ 
    console.log(`${word} does not start with z`)
  }
}
findZWords()

//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove(name,love){ 
  return `${name} loves ${love}`
} 
console.log(iLove(`Carlos`, `coding`))
