let promise1=new Promise(function(rosolve,reject){
    console.log("not bought the ice-cream");
    reject(new Error("Promise not fullfilled"));
});