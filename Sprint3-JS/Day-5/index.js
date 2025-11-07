//Objects and Arrays

//2 types in Js where we can define any object
//using constructor function and object literal

let user = new Object();//Object constrcutor function
let user2={};//object literal

user={//object in JS is a key value pair
    name:"Karthik",
    age:24,
    isAdmin:false,
}
//here Object is created from another object not from a class
//dot notation where we can access the prop of given objects
console.log(user.name,user.age);

//bracket notation
console.log(user["name"],user["age"]);

//objects are not primitive data typ,where they can store multiple data types at once

delete user.age;
console.log(user);

user={
    name:"karthik",
    age:24,
    "likes fruits":true,
}

//console.log(user.likes fruits); //gives error because we cannot access them with dot notation

//so we have to use bracket notation
console.log(user["likes fruits"]);

let obj={
    0:"sample",
}
//console.log(obj.0); for this also we will get error
console.log(obj[0]);
console.log(obj["0"]);

//There are no limitations on property names,they can be any strings or 
//symbols other types are converted to strings

console.log(obj.__proto__);

//proto is a spl property name,we cant set it to non-object value

let user1={};
console.log(user1.age===undefined);
//true
//actually by this line we can know the defined or not 

"age" in user1;
//
//we use in operator for checking property is defined or not 

//why do we use in operator while we can check by above line because

user1={
    age:undefined,
}
console.log(user1.age===undefined);
//but technically age is defined but by above we may assume it as true

console.log("age" in user1);

user={
    name:"karthik",
    age:24,
    isAdmin:true,
}

for(let i in user){
    console.log(i);
}

user.isMarried=true;

user={
    name:"john",
}

let admin=user;
user.name="akbar";
console.log(admin.name);

//shallow copying 

//here admin and user are like pointers pointing to an address 
//where we change property using one pointer(reference) other also changes as it points to same address

let a={};
let b=a;
console.log(a==b,a===b);
//true true
a={};
b={};
console.log(a==b,a===b);
//false because a and b are pointing to a different addresses

user={
    name:"john",
    age:30,
};
let clone={};
for(let key in user){
    clone[key]=user[key];
}
console.log(clone);

//now
clone.name="akbar";
console.log(user.name);
//john
//because here we duplicated which means we have created different address
//and then creating same copy of user

//it is called hard copying

//important:-Shallow copying and hard copying

user={
    name:"john",
    age:30,
};
user.sayHi=function(){
    console.log("Hello");
};
console.log(user);
user.sayHi();

console.log(user.isPrototypeOf(Object));

// user={
//     name:"john",
//     age:20,
//     sayHi:function(){
//         console.log(`${user.name} is the owner of this object`);
//     }
// }
// user.sayHi();

//we can also use "this" here
user={
    name:"john",
    age:20,
    sayHi:function(){
        console.log(`${this.name} is the owner of this object`);
    }
}
user.sayHi();

//in JS ,this can be used in any function ,even it is not method of an object=>
//this in Js is unbound,
//example
let name="akbar";
function sayHi(name){
    name="peter";
    console.log(`${this} is owner of this function`);
}
sayHi();
//undefined is owner of this fucntion
//above we have clearly observed that this.name is not giving any name displayed
//this is unbound it still points to global object given by browser

//Arrays
//defining using constructor fucntion and also other one is array literals
//let arr=new Array();

let arr=["apple",23,false,"banana"];
console.log(arr[0]);
arr[1]=45;
console.log(arr[1]);//we use index to access element in array
console.log(arr.length);//gives length of array

console.log(arr.at(-1));
//when we have to access elemnts from last 
//banana

console.log(arr.at(-3));//accessing :-when we have to access from right to left;

console.log(arr[arr.length-1]);//other method of accessing from last element

//four methods :- pop/push,shift/unshift
//data structure queue is one of the most common uses f an array
//push=>appends an element to end
//pop=>takes an element from end of array
//shift=>it gets an element from begining of array

console.log(arr.push(-23));
//5 as output

console.log(arr);
//prints [ 'apple', 45, false, 'banana', -23 ]

arr.pop(-23);
//-23 as output

console.log(arr.shift());
console.log(arr);
arr.unshift("Apple");
console.log(arr);
arr.unshift("Nothing");
console.log(arr);

//push and unshift can add multiple elements at once
//push/pop run faster,while shift/unshift are slow.
//Dont compare arrays with ==
console.log([]==[]);
//false
console.log([0]==[0]);
//false

//pop,push,shift,unshift are used to add/remove the element
//splice,slice,concat,forEach,indexOf,find,filter,map,reduce,sort reverse
//above methods are important fir interview point which will be learned next class.
