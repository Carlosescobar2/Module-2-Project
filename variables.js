//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

myName = {
  name: "Carlos"
}
console.log(myName)
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

faveNum = { 
  num: "11 is my favorite number"
}
console.log(faveNum)
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
let lovesCode = true; 
console.log(lovesCode)

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
// let Favenum = 11; 

// if(Favenum >= 13){ 
//   console.log("lucky 13")
// } else{ 
//   console.log("not lucky 13")
// }

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE 
faveNum = [3, 3, 3 , 3, 3  ] 
for( let i = 0; i < faveNum.length; i++){ 
faveNum[i]+= 1
}
console.log(faveNum)