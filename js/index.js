// Your code goes here

// VARIABLES
let btn = document.querySelectorAll(".btn");

let bus = document.querySelector('.bus-img');


// FUNCTIONS
let colorGreen = (e) => {
e.target.style.backgroundColor = 'green';
};

let colorBlue = (e) => {
    e.target.style.backgroundColor = 'blue';
};

let busToText = (e) => {
    e.target.src = '';
};


// EVENT LISTENERS
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', colorGreen);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('dblclick', colorBlue);
}

bus.addEventListener('mouseover', busToText);


