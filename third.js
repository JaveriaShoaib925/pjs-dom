// CONDITIONAL STATEMENTS

let age = 21;

if(age>=20){
    console.log("You can cast your vote.");
}

if(age<=20){
    console.log("You can not cast your vote.");
}

if(age>20){
    console.log("You can cast your vote.");
}

else{
    console.log("You can not cast your vote.");
}

let userName = prompt("enter Your name");
console.log(userName);

let mode = prompt (`Enter Your Mode
1) DARK
2) LIGHT`);
let color;


if(mode === "DARK"){
    color = "black"
}

if(mode === "LIGHT"){
    color = "white"
}

console.log(color);