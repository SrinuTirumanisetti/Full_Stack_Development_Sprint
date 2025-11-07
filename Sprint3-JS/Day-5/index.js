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

