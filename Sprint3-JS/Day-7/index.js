//callbacks,promises and async/await

//Asynchronous actions:actions that we initiate now,but they 
//finish later

//setTimeout().,
//Interview question:-What are real world example of asynchronous actions?
//ex:loading scripts(importing) and modules.

//every html element has attributes,these are properties
//<script src="index.js"><script/>
// function loadscript(src){
//     let script=document.createElement("script");
//     script.src=src;
//     document.head.append(script);//to include script tag 
//     //with src into html code
// }
//it inserts into document a new script tag with given src,
//when we try to pass src to it,the browser automatically starts loading 
//loading and executes when completed

//when we pass a fucntion as an argument into a fucntion then
//is is callback
// function loadscript(src,callback){
//     let script=document.createElement('script');
//     script.src=src;
//     script.onload=()=> callback(script);
//     document.head.append(script);
// }
// //onload event is basically executes a function after script
// //is loaded and executed
// loadscript("http://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",script=>{
//     alert(`cool,the script ${script.src} is loaded`);
//     console.log(_);
// });

//A fn that does something asynchronously should provide a callback
//argument where we put the fn to run after its complete.

//promise ,we tell to do something that thing may be achived or may not?
//so this is what meant promise
//nani's brother promised nani to bring an ice-cream
//Nani brother bought ice cream-so here nani's wish has been fulfilled
//Nani's brother might forget it - so here nani's wish is pending
//Nani's brother told him no such ice-cream in market-
//so here nani's wish is denied
//frontend and backend,to establish a communication have included this promises

// let promise = new promise(function(resolve,reject){
//     //code
// });

//so here in any given promise we have resolve/reject which are callbacks
//that are used to tell whether your promise is completed or not.
// let promise = new Promise(function(resolve,reject){
//     console.log("Hello Nani,this is your ice-cream");
//     resolve("Promise resolved");
// });
// console.log(promise);

// let promise = new Promise(function(resolve,reject){
//     console.log("Hello Nani,i am sorry i didnt bought the ice-cream");
//     reject("Promise rejected");
// });
// console.log(promise);

// let promise = new Promise(function(resolve,reject){
//     console.log("Hello Nani,i am sorry i forgot the ice-cream");
// });
// console.log(promise);
//pending

//there are no completing promise and not completing the promise
//happen at same time
// let promise1=new Promise(function(rosolve,reject){
//     console.log("Bought the ice-cream");
//     resolve("Promise fullfilled")
// });

// let promise=new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log()})
// });
// console.log("start of code");
// promise=new Promise(function(resolve,reject){
//     setTimeout(()=>{console.log("Printed this line after 5 seconds")},5000);
//     resolve("Promise resolved");
// });
// console.log("End of code");
// console.log(promise);

//output:-
// start of code
// End of code
// Promise { 'Promise resolved' }

// Printed this line after 5 seconds

// let promise = new Promise(function(resolve,reject){
//     console.log("start of code");
//     setInterval(()=>console.log("Print this line for every 3 seconds"),3000);
//     console.log("End of code");
//     resolve("Promsie fullfilled successfully");
// }).then(
//     result=>console.log(result),
//     error=>console.log(new Error("whoops I am sorry")),
// );

async function hello() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000);
    });

    let result = await promise;  // wait until the promise resolves
    console.log(result);
}

hello();
