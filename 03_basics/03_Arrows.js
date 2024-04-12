
// const user = {
//   userName:"darshan",
//   price :458,

//   welcomeMessage: function(){ //Unexpected identifier 'welcomeMessage'
//      console.log(`${this.userName}, welcome to this page`);
//       // console.log(this);
//   } 

// }

// user.welcomeMessage();
// user.userName="sam bhadur";
// user.welcomeMessage();
 //console.log(this); // {}  when you execute same in browser it gives  window 
//because in earlier times js is executed only on browsers
//in browser global object is window object


// function  function1(){
//   return this;
// }
// function1() === Window
// ======================== prequist for function completes ==================

// fuctions does'nt support the this keyword because this keyword usually refers to the object


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// arrow function V/S other functions