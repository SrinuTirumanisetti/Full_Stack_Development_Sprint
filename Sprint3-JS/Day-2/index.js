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
