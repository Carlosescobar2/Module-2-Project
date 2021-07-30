/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

var gitDefintion = " git is a program that can be managed on you computers command-line that allows you to see history of commands on projects. Git also prevent bugs"
console.log(gitDefintion)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
var gitHubdefinition = " GitHub is a website where you can upload git files and collabrate on projects with others"
console.log(gitHubdefinition)
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = { 
    description:"is used in the command line to reinitialize a new or old git repository",
    code:" git init"
}
console.log(init)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/
let clone = { 
    description:"creates a copy of a file",
    code:" git clone"
}
console.log(clone)

//CODE HERE

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = { 
    description:"checks the status of you git repository",
    code:" git status"
}
console.log(status)
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = { 
    description:"will add you file to the git repository",
    code:" git add"
}
console.log(add)
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = { 
    description:" git commit can commit a message for the git repository",
    code:" git commit -m"
}
console.log(commit)
//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = { 
    description:"push the files into the git repository",
    code:" git push "
}
console.log(push)