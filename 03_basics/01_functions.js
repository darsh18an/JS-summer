

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
// console.log(logginUserMessage());

// function calculateCartPrice(...num1){
//... act as rest operator  here ... depends on use case it may act as spread or rest operator
//   return num1;
// }
// console.log(calculateCartPrice(200,800,900));//[ 200, 800, 900 ]

function calculateCartPrice(val1, val2,...num1) {
  //... act as rest operator  here ... depends on use case it may act as spread or rest operator
  return num1;
}
// console.log(calculateCartPrice(200, 800, 900, 500,600));//[ 900, 500, 600 ]

const user={
  userName:"darshan",
  price :548
}

// handel object
// function handelObject(anyObject){
//   console.log(`userName is ${anyObject.userName} and price is ${anyObject.price}`);
// }
// handelObject(user)

// passing object
// handelObject({
//   userName:"sam",
//   price:254
// })
// passing of array

const myNewArray =[200,500,60,880,990];

function secondvalue(getArray){
  return getArray[1];
}
// console.log(secondvalue(myNewArray));
console.log(secondvalue([500,600,800,900]));



