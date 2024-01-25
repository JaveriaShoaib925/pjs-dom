let elem = document.getElementsByClassName('container');
elem[0].innerHTML = "HELLO EVERYONE!";

let newBtn = document.createElement('button');

elem[0].appendChild(newBtn);

newBtn.innerHTML = "CLICK HERE!";
newBtn.className = "btn btn-dark px-6 fw-bold";
newBtn.style.letterSpacing = "5px";

// EVENTS ;

newBtn.addEventListener('click', hello);
    function hello(){
        console.log("YOU CLICKED HERE!");
        newBtn.innerHTML = "IT'S WORKING!";
    }

let apple = document.createElement('input');
elem[0].appendChild(apple);

apple.classList = "form-control mt-5";

apple.addEventListener('keyup', wow);
    function wow(){
        console.log("THIS IS AN APPLE");
    }