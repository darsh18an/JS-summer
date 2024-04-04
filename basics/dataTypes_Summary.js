// primitive 
// 7types: String, Number, boolean , null , undefined , symbol, BigInt



// javaScript is dynamically typed language
const score = 100;
const scoreValue =100.33;

const isLoggedIn =false; // boolean
const outSideTemp = null; //object
let userEmailId ; //undefined

const id = Symbol(115); //symbol
const anotherId = Symbol(115); // symbol 
console.log(id === anotherId);

const bigNumber = 511651656584656n;




// Reference (Non primitive)


// Arrays, objects, functions


 const superHeroes = ["thor", "hanuman", "ironMan","hulk"];
 let obj ={
    name :" dasa",
    age:54,
 }      //object

 const myFunction = function(){
    console.log("hello world");
 }   // returns function called as object function

 console.log(typeof myFunction);

 // https://262.ecma-international.org/5.1/#sec-11.4.3
