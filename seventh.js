
let name = prompt("Enter your name");
console.log(name);
let physics = parseInt(prompt("enter your physics marks"));
let urdu = parseInt(prompt("enter your urdu marks"));
let math = parseInt(prompt("enter your math marks"));
let computer = parseInt(prompt("enter your computer marks"));
let PST = parseInt(prompt("enter your PST marks"));
let total = physics+urdu+math+computer+PST;
console.log(total);

let per = total/500*100;
console.log(per);

if(per >=90 && per<=100){
    console.log("Your grade is A+1");
}

else if(per >=80 && per<=90){
    console.log("Your grade is A+");
}


else if(per >=70 && per<=80){
    console.log("Your grade is A");
}

else if(per >=60 && per<=70){
    console.log("Your grade is B");
}


else if(per >=50 && per<=60){
    console.log("Your grade is C");
}


else if(per >=40 && per<=50){
    console.log("Your grade is D");
}

else if(per <=40){
    console.log("You are failed");
}