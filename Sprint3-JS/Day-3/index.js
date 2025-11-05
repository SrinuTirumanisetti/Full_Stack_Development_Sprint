//Comparision operators
// >,<,<=,>=,==,!=(Not equal to)
//All comparision op return a boolean either true or false
//true:-yes,correct or the truth
//false:-no,wrong or not the truth

console.log(2>1);
console.log(2==1);
console.log(2!=1);

//we can assign the result of omparision to a variable
let result=2>1;
console.log(result);

//String comparision:- they are compared letter by letter
console.log('z'>'A');
//true

console.log('glow'>'glee')//in this case where js will check letter by letter
//'o'>'e' // true

console.log("Bee">"Be");
//true

a=Number('b');
console.log(a);
//NaN //it does not give value like other prog languages

console.log(0>0);
//false

//when comparing values of different types,JS coverts the values to numbers
console.log('2'>1);//2 is converted to 2
//true

console.log('01'==1);
//true

//two values are equal,one of them is true as boolean and the other one is false;
let a=0;
console.log(Boolean(a));
//false

let b="0";
console.log(Boolean(b));
//true

console.log(a==b);
//true

console.log('h'>0)
//false

// == for equality check and === for strict equality
console.log(0==false);
//true

console.log(0===false);
//false
//when we use === then this checks both operand values and checks data type also.

console.log('A'==='Z');
//false

console.log(2+'2'-1);
//21
//other than plus symbol all other operators convert string to number

console.log("1h"<"2h");
//true

console.log(null===undefined);
//false

console.log(null==undefined)
//true

//speacial rule in JS:- these are equal each but not with others
//>,<,>=,<= when used between null & undefined,then null becomes 0 and undefined beacomes NaN
console.log(null==0);
//false

// == does not convert null to 0 
//where as others convert null to 0 and compare
