let heroes = [ "Bat man" , "Super man" , "Hulk" , "Spider man" , "Iron man" , "Falcon"];
console.log(heroes);

// ARRAYS ARE MUTABLE
heroes[5] = "Aqua Man";
console.log(heroes);

// SPLICE METHOD
console.log(heroes.splice(2,0, "Why man" , "Acha man"));
console.log(heroes);


let bbq = [ "TIKKA" , "MALAI BOTI" , "SEEKH KABAB" , "CHAPLI KABAB" , "CHARGHA" ];
let seaFood = [ "FISH" , "PRAWNS" , "LOBSTER" ];
let sweetdish = [ "CUSTARD" , "CAKE" , "ICE CREAM" , "JELLY" , "CHOCOLATES"];

let menu = bbq.concat(seaFood , sweetdish);
console.log(menu);
