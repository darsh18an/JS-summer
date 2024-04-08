// we two methods to decleare object one is literal and constructor 
// whenever you create using constructotr it gives you singleton which hybrid pilla okkatey piece
// in object literals it does'nt lead to singleton rather we can create multiple instances.

// declaring through objects
// Object.create


// declaring through literals
const mySymbl = Symbol("key1")
 const JsUser = {
   name: "darshan",

   // key:value
   "full name": "K N Darshan",
   [mySymbl]:"mykey1",
   age: 21,
   email: "affa@google.com",
   isLoggedIn: false,
   lastLoginDays: ["monday", "tuesday"],
 };

//  Object.freeze(JsUser);
 JsUser.email="hjfd";

// access the object
// console.log(JsUser.age);
// correct way to acess the object
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySymbl]);
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello my ear");  
}
 console.log(JsUser.greeting);

