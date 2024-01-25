// DOM ------> DOCUMENT OBJECT MODEL

// let word = document.getElementById('para');
// word.innerHTML = "Kese ho";
// word.style.backgroundColor = "lavender";
// word.id = "world";
// word.classList.add("hello");

// console.log(word);


let elem = document.getElementById('second');
console.log(elem);
// elem.innerHTML = "AN APPLE A DAY!";
elem.textContent = "AN APPLE A DAY!";
elem.style.backgroundColor = "Cyan";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add('two');
elem.classList.add('three');
elem.classList.remove('two');
elem.id = "hello";


let myDiv = document.getElementsByClassName('container');

myDiv[0].innerHTML = "DOM";
myDiv[0].style.backgroundColor = "black";
myDiv[0].style.fontSize = "45px";
myDiv[0].style.color = "white";
myDiv[0].style.textAlign = "center";
myDiv[0].classList.add("work");
myDiv[0].id = "DOM";

let newElem = document.createElement('p');

myDiv[0].appendChild(newElem);
newElem.innerHTML = "DOM WORK";


let image = document.createElement('img');
newElem.appendChild(image);

image.src = "img.jpeg";
