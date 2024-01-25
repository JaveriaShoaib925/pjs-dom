// let grade = prompt("Enter your Grade");

// TURNARY OPERATION
// let result = grade == "A" || grade == "B" || grade == "C" || grade == "D" ? "PASS" : "FAIL";
// console.log(result);

let grade = prompt("Enter your grade");
let per = prompt("Enter your percentage");

let number = grade === "A" && per == "90" || grade === "B" && per == "80" || grade === "C" && per == "70" || grade === "D" && per == "60" ? "PASS" : "FAIL";
console.log(number);
