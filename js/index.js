// Your code goes here

// VARIABLES
let btn = document.querySelectorAll(".btn");

let bus = document.querySelector('.bus-img');

let adImg = document.querySelector(".adventure-img")

let nav = document.querySelectorAll('.nav-link');

let body = document.querySelector("body");
// FUNCTIONS
let colorGreen = (e) => {
e.target.style.backgroundColor = 'green';
};

let colorBlue = (e) => {
    e.target.style.backgroundColor = 'blue';
};

let colorRed = (e) => {
    e.target.style.color = 'red';
    preventDefault();
};

let colorBlack = (e) => {
    e.target.style.color = 'black';
    preventDefault();
};

let removeSrc = (e) => {
    e.target.src = '';
};

let alertPage = (e) => {
    alert('hey im an alert!')
}

let pressPurple = (e) => {
    if (e.keyCode === 69) {
        body.style.backgroundColor = "purple";
    }
}

let pressWhite = (e) => {
    if (e.keyCode === 69) {
        body.style.backgroundColor = "white";
    }
}


// EVENT LISTENERS
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', colorGreen);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('dblclick', colorBlue);
}

bus.addEventListener('mouseover', removeSrc);

nav[0].addEventListener('mouseenter', colorRed);

nav[1].addEventListener('mousedown', colorRed);

nav[1].addEventListener('mouseup', colorBlack);

nav[0].addEventListener('mouseleave', colorBlack);

window.addEventListener('load', alertPage);

window.addEventListener('resize', alertPage);

document.addEventListener('keydown', pressPurple);

document.addEventListener('keyup', pressWhite);