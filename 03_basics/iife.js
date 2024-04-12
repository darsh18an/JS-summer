// immediately invoked function expression(IIFE)

// why we should we use iife
// immediately invoked function is needed to execute function immediately

// ex: in file if you have only database connection thne you may want to start it immedeately then we can use this function
// to protect global scope from polluting

// normal function

// function chai(){
//   console.log(`db.connected`);
// }
// chai();

//  to write iife
(function chai(){
  // named iife
  console.log(`db connected`);
})();

( ()=>{
  // simple iife
  console.log(`db not connected`);
})();
// when you are writing two or more iife then end the block explicitly with " ; "
// ( ()=>{
// ^

// TypeError: (intermediate value)(...) is not a function this erroe you get when you don't use ";"or end explicitely

((name) => {
  // simple iife
  console.log(`db not connected ${name}`);
})('darshan');
