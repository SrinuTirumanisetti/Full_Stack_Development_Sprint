//Logical operators

// || (OR),&&(AND),!(NOT),??(Nullish coelliasing operator)
//||(OR), pipe operator

console.log(false||false);
//false

let hour=12;
if(hour<10 ||hour>18){
    console.log("cafe is closed");
}

//OR finds the truth value in chain of values
//result=value1||value2||value3;
console.log(null||1||0);
//null || 1=>true,then the execution of remaining code will not be done 
//1

//OR try to find first truthy value or last false value;
let result=null||"Hello"||0;
//result=Hello;
console.log(result);

let res=null||null||0;
console.log(res);
//0 is last false value

// && (AND),where if either of operand false gives false

//&& finds the first false value and last truth value
let ans=1&&false&&0;
console.log(ans);
//false

let answer=1&&0&&null;
console.log(answer);
// 0 && null isnot executed


// ! this converts true to false and false true
console.log(!1);


//??(Nullish coalescing),it treats null nad undefined similarly
//we'll say that value is "defined" when its neither "null" nor "undefined"
//udefined means that variable is having no data stored
//result=a??b //if 'a' is defined then 'a' will be stired in result
//if 'b' is defined then 'b' will be stired in result

//?? returns the first argument if its not null/undefined

let b=0,a;
let resu=a??b;
console.log(resu);
// resu=0 output

//?? returns the first defined value;
//|| return the first truth value and also last false value
//&& return first false value and also last tru value

//you have a login page and where you are actually trying to take values of firstName and lastName
if(firstName??middleName??lastName){
    console.log("you entered all details");
}
else{
    console.log("you have enter");
}