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
