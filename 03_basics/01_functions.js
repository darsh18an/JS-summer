

function myName(){
  console.log("D");
  console.log("a");
  console.log("r");
  console.log("s");
  console.log("h");
}


// myName();

// function addTwoNumbers(number1, number2){
  
//   console.log(number1+number2);
// }

// addTwoNumbers(3,"4");//undefined
// const result = addTwoNumbers(3,4);
// console.log(`result: ${result}`);//undefined

// function addTwoNumbers(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }
// const result = addTwoNumbers(2,3)
// console.log(`result: ${result}`);

// function logginUserMessage(userName){
//   return`${userName} just logged in`
// }

// logginUserMessage("darshan");// no output but when you print statemnet only it will print
// console.log(logginUserMessage("darshan"));// darshan just logged in
// console.log(logginUserMessage());//undefined

// function logginUserMessage(userName) {
//   if(userName===undefined)
//   {
//     console.log("please enter valid userName");

//   }
//   return `${userName} just logged in`;
// }
// console.log(logginUserMessage("darshan"));
// console.log(logginUserMessage());

function logginUserMessage(userName) {
  if (!userName) {
    console.log("please enter valid userName");
  }
  return `${userName} just logged in`;
}
// console.log(logginUserMessage("darshan"));
console.log(logginUserMessage());
