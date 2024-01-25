console.log("welcome to pjs");
console.log("Hellow World");

// DATA TYPES

name = "Tom";   // STRING
num = 50;       // NUMBER
x = undefined;  // UNDEFINED
y = null;       // NULL
Boolean = true; // TRUE , FALSE

console.table(name, num, x, y, Boolean);

// WE HAVE TWO KINDS OF DATA TYPES

// 1) Primitive data types   STRING NUM BOOLEAN INT ETC
// 2) NON PRIMITIVE DATA TYPES  Array,  Objects ,  Functions etc

let obj ={
    name : "Afnan",
    age : 24,
    grade : "A",
    phone : 1234567,
    city : "Karachi",
}

// FIRST METHOD TO GETTING VALUES OF AN OBJECT
console.log(obj["name"]);
console.log(obj["age"]);

// SECOND METHOD TO GETTING VALUES OF AN OBJECT
console.log(obj.city);

// FOR IN LOOP
for(let i in obj){
    console.log(i , obj[i])
}