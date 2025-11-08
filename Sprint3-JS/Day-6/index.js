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
//to control we pages
//Node.js provides server side features and so on.
//root object called 'window' object.it has 2 roles
//1)it is a global obj for JS
//2)it represents browser window and methods to control it.

function sayHi() {
    console.log("Hello World");
}

sayHi();           
global.sayHi = sayHi;
global.sayHi();

console.log(global.innerHeight);

//DOM=>Document Object Model,represents all page content as objects
//that can be modified

//document object is main "entry point" to page
//we can change anything on page using document object
//is DOM is constrained for browsers?(Interview questions)
//NO,DOM specifications explains the structure of document and
//provides objects to manipulate it .there are non-browser instruments
//that uses dom too.
//CSSOM=CSS object model for CSS rules

//BOM,Browser Object Model
//it respresnts additional objects provided by browser for 
//working with everything except the document
//Navigator Object,background info about the browser and OS
console.log(navigator.userAgent);
console.log(navigator.platform);

console.log(location.href);
//Location Obj provided by BOM,allows to read the current URL
//  & can redirect the browser to new one
if(confirm("Go to netflix")){
    location.href="https://www.netflix.com";
}

//alert,confirm,prompt are part of BOM,as these are broswer
//related method.

confirm("Are you 18+ ?");


//Backbone of HTML document is Tags
//Acc to DOM,every HTML tag is an object
//Everything that is present on screen itself is JS object
//Everything that will be rendered on to screen itself is JS object
//we can apply object methods and also array methods onto 
// HTML elements
document.body.style.color="grey";
//style.color to chsnge the text color of document.body
//DOM represents HTML as a tree structure of tags
//Every Tree node is object,Tags are element node,
//<HTML> is root ,<Head>,<body> are children pf <HTML>
//element itself

//All operations on DOM start with document obj,as it is 
//entry point to DOM
//document=>document.head/document.body
//document.documentElement=>document.html