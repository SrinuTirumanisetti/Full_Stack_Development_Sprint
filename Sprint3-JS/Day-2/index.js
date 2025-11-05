//Data types in JS,Operators,Conditional statements
//Data types in JS:8 data types in total.
//7 data types are primitive and 1 non-primitive
//we can only store one data tyoe in primitive data type
//where as in non-primitive data type we can store multiple types

//Primitive:-Number,bigInt,String,boolean,null,undefined,symbol
//Non- primitive:-Objects

//number: a variable that can store either integer or floating point number
//number:-integers are limited by -(2^53-1) to (2^53-1)

//bigInt,is used to store integers of very big length
//c=14274593637589456745738547564n //is storing bigInt data type
//end with n (n is compulsory) because 
//depending on a variable data type,their memory is allocated in RAM
//During execution of program
//JS gives spl Mathematical symbols:Infinity,-Infinity,NaN(Not a number)
//a=2^53.6745 //it is treated as bigInt data type
let a=console.log(1/0);//Infinity


//10 lines of python code,where we have an error on 6th line,
//once your python interpreter shows error on 6th line,it stops execution
//But js it doesnt happen in this case.
let a="hello";
console.log(a/2) //=>"Hello"/2 
//output as NaN

let a=33n;
console.log(typeof(a));
//Output as bigInt

let a=Infinity;
console.log(typeof(a));
//Output as number


//In js we can declare string in 3 types
let a='hello';
a="Hello";
a=`Hello`; //Usage backticks this has more edge compared to others

let age=24;
console.log(`so my age is currently ${age}`);

//hierarchy of string --> backticks(Strng interpolation and called as tempplate literals)-->double-->single ticks
//String is immutable
let b="Hello";
b[2]="2";
console.log(b);


//boolean = true/false
let age=null;//This value does not belong to any data type
//reference to non existing object / null pointer

let gender=undefined;//value is not assigned to variable


//Symbols,used to create unique identifiers,these are used to give completeness to a data type


//Object
let obj = {
    id: 123,
    message: "hello",
    bigNumber: 33n,
    isActive: true,
    nested: {
        code: 456,
        topic: "IoT",
        available: false
    }
};

//we have unary,ternary operators in js
//a+b=>'a,b' are both operands and '+' is operator
//if the operator has two operands it is binary operator a+b
//if the operator has only one operand(-a) unary
//+,-,*,/,%,**(exponentiation)

//binary + in JS is used for string concatenation.
console.log("hii"+"srinu");
//hiisrinu
console.log("hii"*3);
//NaN

let x=Number("227");
console.log(typeof(x));
//Number

//unary + in js,is used to type cast to any data type consist of number in it,to number data type.
let y=+("123");
console.log(typeof(y));
//Number'

let b=+("hello");
console.log(typeof(b),b);
//Number NaN

let c='1'+2;
console.log(c);
//12
console.log(typeof(c));
//string

//when we use binary +,if either of operand is actually a string ,then other operand will be type converted to string
console.log(2+3+'1');
//first binary plus is used to add numbers (5+'1')=>51
//51

console.log('1'+2+2);
//first binary plus is used to converts 2 to '2'=>('12'+2)=>'122'

// , and = as an operators in JS ,"=" is an assignment operator
//let a=b=c=2 chaining of values
let z=1;
z=z+1;
z=z*2;
z=z/2;

let a,b,c,d;

//postfix and prefix increment/decrement
let w=1;
let p=w+1;
console.log(w,p);
//1 2

//b=b+1 //b+=1 => b++(postfix)/++b(prefix)
//when we use operator ++/-- before the operand it is prefix
//when we use operator ++/-- after the operand it is postfix
let b=1;
let c=b++;
let d=++b;
let e=b--;
let f=--b;
console.log(b,c,d,e,f);
//1 1 3 3 1

//when we do postfix,we first use the value in operand and then we will increment/decrement
//when we do prefix,we first increent/decrement and then assign the value; 







