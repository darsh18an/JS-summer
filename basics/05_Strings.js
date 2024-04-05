const name = "darsha";
 const repoCount = 7;
// console.log(name+ repoCount+ "value");

// // String interpollation which will create placeholder where you can inject variable directly
// console.log(`hello my name is ${name.upperCase} and my repo count is ${repoCount}`); 

// const gameName = new String("kiran");
// const name = "hitesh";
// const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
