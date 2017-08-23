//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
  if(name === 'Tyler'){
    return true;
  }else{
    return false;
  }
}  
isTyler(name);//Code Here

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  var name = prompt("Enter name here!");
  if (name === null || name === ""){
    return "user canceled window";
  }else{
    return name;
  }
}
  
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.


function welcome(){
  return alert("Welcome, " +getName());
}
welcome();
//Code Here


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here=  Paramerters are what you want to use within the function and arguments are what you're trying to solve using parameters.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here = null, undefined, NaN, 0, "", false. 
  //if (!myString)



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

function myName(){
  return "Chad";
}
myName();//Code Here




//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;
//Code Here

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

 function outerFn(){
    return function(){
      return 'Chad';
    }
 }
 outerFn(); //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn(); //Code Here

//Now invoke innerFn.
innerFn();