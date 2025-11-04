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


