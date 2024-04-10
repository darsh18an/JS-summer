// if(true){
//   let a=10;
//   const b=20;
//   var c=30;
// }

//console.log(a);// a is not defined
// console.log(b); // b is not defined
// console.log(c);//30 
// as c can be acess from outside of the scope also, 
// which is not gud thing which create conflicts while working on other function or in any other file.

// let a = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
//   console.log("Inner: ", a); //10
// }

// console.log(a);


// function one() {
//   const userName="darsh18an";

//   function two() {
//     const website="git";
//     console.log(userName); // but you can access username has it come under global scope
//   }
  
// console.log(website); // it can't access the function two 
// it is outside the scope of the function
//    two();
// }
// one();


if (true){
  const userName = "savera";
  if(userName=="savera"){
    const website= "yotube";
    // console.log(userName," " + website);
  }
  // console.log(website);// 1 not defined
}
// console.log(userName);// 2 not defined

// Hoisting where we can access the function with defination before intillization also
// but not in case of the expression function you cannot access the variable before intilization.

console.log(addOne(5));// 6
function addOne(num1){
  return num1+1;
}


console.log(addTwo(5)); // Cannot access 'addTwo' before initialization
const addTwo = function(num1){
  return num1+2;
}
// console.log(addTwo(5));//7


