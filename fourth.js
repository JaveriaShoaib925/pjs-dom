// FOR LOOP

for(let i=0; i<=10; i++){
    console.log("this is for loop" , i);
}


// WHILE LOOP

let num = 15;

while(num<=20){
    console.log("This is a While Loop!" , num);
    num++;
}


// DO WHILE LOOP

let a = 50;

do {
    console.log("This is a do while loop!" , a);
    a++;
} while (a<49);



let obj = {
    name : "Tom",
    age : 20,
    grade : "A"
}

for(let z in obj){
    console.log(z , obj[z])
}

// TABLE

let = prompt ("Enter your value")

for(let x=1; x<=15; x++){
    console.log("5x", x, "=", 5*x)
}

// EVEN ODD

for(let s=0; s<=45; s++){
    if(s%2==0){
    console.log("This is an even number", s);
}
else{
    console.log("This is an odd number", s);
}
}