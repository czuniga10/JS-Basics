//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if(name == 'Tyler'){
    return True;
  }else{
    return False;
  }
}  //Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(user){
  return prompt("Enter Name");
}
  console.log(user);
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(user){
  alert "Welcome, " + user;
}//Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here=  paramerter are what you want to use in the function and arguments are what you're trying to solve using parameters.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here = null, undefined, NaN



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
  var name = "Chad";
  return name;
}


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName("Chadd")  //Code Here

//Now alert the result of invoking newMyName

console.log(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.
