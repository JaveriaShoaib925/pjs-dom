// GAME

let gameNum = 25;
let userNum = prompt("Enter your Number");
while(userNum != gameNum){
    userNum = prompt("You guess the wrong number : Guess again")
}

swal({
    title: "Auto close alert!",
    text: "You win the game.",
    timer: 5000
  });