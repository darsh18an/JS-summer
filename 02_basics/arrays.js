// Arrays

// const myArray = [0,1,2,3,4,5, true, "darsahan"];
// console.log(myArray);



// const myheros = [ "thor", "batman", "superman","ironman"];
// console.log(myheros);

// shallow copy  VS Hallow copy

const myArr2 = [1,2,3,4];

// array methods

// push
// myArr2.push(6); // [1, 2, 3, 4, 6];
// console.log(myArr2);

// pop
//  myArr2.pop();
//  console.log(myArr2);//[ 1, 2, 3, 4 ]

 //  unshift
// myArr2.unshift(0);
// console.log(myArr2); //[ 0, 1, 2, 3, 4 ] adds in first index  which is to consuming as it shifts each and every element 
 // in the index creats the load on PC
 
 // shift
// myArr2.shift();
// console.log(myArr2); //[ 1, 2, 3, 4 ] removes first index 
 // includes 
// console.log(myArr2.includes(4)); //true
// console.log(myArr2.indexOf(3)); //2

// const newArr = myArr2.join();
// console.log(myArr2,typeof myArr2); //[ 1, 2, 3, 4 ] object
// console.log(newArr, typeof newArr); //1,2,3,4 string

// slice vs splice

console.log("A ", myArr2);
// slice manuplates the copy of array not the original one  and end number is not included pre end number is taken
const myNA = myArr2.slice(1,3);//[ 2, 3 ]

console.log(myNA);
console.log("B " ,myArr2);
// splice manuplates the original array and end number is included 
const myNA1 = myArr2.splice(1,3);
console.log(myNA1);
console.log(("C ", myArr2));

