//Functions in JS
function sum(a,b){
    return a+b;
}//in this we use function keyword to define function =>function expression

let mul = function(a,b){
    return a*b;
}

//Arrow functions are used as shorthand notation
//  for writing a function,=>(arrow symbol)
let div=(a,b)=>{
    return a/b;
};

sum(5,6);
mul(2,3);
div(4,2);
//let obj=new Object() / let arr=new Array();
//constructor function are fucntions that are used for specific
//purposes,these are spl fcuntions which will have their starting 
//letter as capital.
//function Srinu(){};,to use constructor function we need 
//new keyword.

let sub = new Function();
console.log(sub);


//DOM Manipulations

//JS was initially created for web browsers,it evolved into 
//language with many uses and platforms
//JS specification call that platforms as host environment
//a host environment provides its own objects and func
//in addition to language core.
//we browser is one such a host where it provides features
//to contral we pages
//Node.js provides server side features and so on.
//root object called 'window' object.it has 2 roles
//1)it is a global obj for JS
//2)it represents browser window and methods to control it.

function sayHi(){
    console.log("Hello World");
}

