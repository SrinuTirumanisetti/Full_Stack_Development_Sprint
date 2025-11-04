//3 ways of declaring & initializing variables in JS

//let,var,const
//If i wnat to declare a variable 'a',
let a;//Declaring a variable
let b=10;//Initializing a variable
//variables are kind of empty boxes,where we can store data in it.
//So if we dont store any value in variable then waste of use.

var name ="Js";
const age=24;

//Difference between var,let
let animal="lion";// intialized the variable
//animal="zebra";//(actually possible no error when we declare like this)
let animal="zebra";//this yields the error
//Because we use 'let' to declare any variable only once it should be used 


var animal="lion";
var animal="zebra";

//In ES6 standard,we are using 'let' to declare/initialize a given variable but we are not using 'var'

const bday="24-10-2000";
bday="Hello"//gives error because once a variable using const cannot be changed.


//let/var,rgb() for color property in CSS,we provide HEX code values
const ORANGE="#F00034" //we can use it any where in code for same value