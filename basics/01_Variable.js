const accountId = 1248965;
let accountEmail = "assdd@accountEmail.com";
var accountPassword = "145@fgG";
accountCity = 'bengaluru';
let accountState;
/*
 1.Prefer not use "var" because of issue in block scope and functional scope.
 2. without declaring also js can read the variables but do'nt prefer it.
 3.leaving variable without assigning the value will give you "undefined"
*/

// accountId = 1245l // not allowed
console.table([accountId, accountEmail,accountPassword, accountCity,accountState]);