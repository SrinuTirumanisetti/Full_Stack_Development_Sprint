//let h2=document.createElement("h2");//h2 is JS variable which is storing the h2 element
//h2.innerHTML="How are you doing now?";
//document.body.appendChild(h2);//adding the element to the body element
/* h2={
innerHTML:"How are you doing now?"
innerText:"How are you doing now?"
} */
//I am trying to include html using javascript we can manipulate the DOM
//DOM=> Document Object Model where here we are manipulating or changing the HTML using JS
//when your webpage is actually loading into browser the browser itself create a DOM tree
//firstly the rendering engine of the browser will read the HTML file and create a DOM tree
//where this DOM tree is nothing but a representation of the HTML elements in the form of a tree structure.

//On a short note we are writing in code,which is 
//visible on screen is nothing but a JS Object
// let obj={
//     name:"training Institute",
//     mission:"to provide quality education",
//     features:"Training in regional languages"
// };
//To access any of property in Object we use dot notation
//alert(obj.name);

function createElement(data){
let parent=document.getElementById("main-area");
for(let i=0;i<data.length;i++){
    var child=document.createElement("div");
    var grandChild1=document.createElement("span");
    grandChild1.innerHTML=data[i].title; 
    var grandChild2=document.createElement("span");
    grandChild2.innerHTML=data[i].description;
    var grandChild3=document.createElement("button");
    grandChild3.innerHTML="Delete";
    child.appendChild(grandChild1);
    child.appendChild(grandChild2);
    child.appendChild(grandChild3);
    parent.appendChild(child);
}
}


window.setInterval(()=>{
    createElement([{
        title:"Sample Title 1",
        description:"Sample Description 1",
    }],1000);
})

window.setInterval(() => {
    let todos=[]
    for(let i=0;i<Math.floor(Math.random()*100);i++){
        todos.push(
            {
                title:"Go to sprint",
                description:"this is useful to learn reactjs better than any other course",
                id:i++,

            }
        )
    }
    createElement(todos);
},1000);
//all the websites like insta facebook twitter are dynamic websites
//where html is not pre return
//This is coming from backend
//we cannot hardcode the html,so we use
//JS variables and functions to create HTML elements.

//This concept of including HTML using JS is
//State Management

//To manage the state of the application we are using JS fucntions
//Reconciliation
