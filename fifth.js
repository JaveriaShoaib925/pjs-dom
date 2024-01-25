// ARRAY

let fruits = ["Apple", "Mango", "Orange", "Pine Apple"];
console.log(fruits);
console.log(fruits.length);

// METHODS OF AN ARRAY

// PUSH last index mai add krta hai
console.log(fruits.push("Banana"));
console.log(fruits);

// POP last index se remove krta  hai
console.log(fruits.pop());
console.log(fruits);

// SHIFT first index sy element ko remove krta hai
console.log(fruits.shift());
console.log(fruits);

// UNSHIFT first index sy element ko add krta hai
console.log(fruits.unshift("Kiwi"));
console.log(fruits);

// ['Kiwi', 'Mango', 'Orange', 'Pine Apple']

// SLICE Yh ek particular portion laa kr deta hai first value target index like second jahan tk element chahy (1,5)
// second value me apne jo last value di hai to wo us se ek pehle wale tk apko elements laa kr deta hai
// agr 5 dia hai second index mai to wo apko 4 tk ki values laa kr dega!
console.log(fruits.slice(1,4));