function hello(){
    console.log("HELLO WORLD");
}

hello()
hello()
hello()

// FUNC WITH PARAMETER

function person ( name , age , grade){
    return name + " " + age + " " + grade;
}

let myValues = person( "Afnan" , 25 , "A" );

console.log(myValues);

function sum (a,b){
    console.log(`The sum of a+b is ${a+b}`);
}

sum(50,45);

