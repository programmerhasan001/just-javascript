let score = null

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(valueInNumber >= 0 && score !== null);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, "Boolean");

// Boolean()
// 1 => true; 0 => false;
// "" => false; "adjk" => true;
