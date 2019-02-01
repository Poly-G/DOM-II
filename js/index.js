// Your code goes here

// VARIABLES
let btn = document.querySelectorAll(".btn");

// FUNCTIONS
let colorGreen = (e) => {
e.target.style.backgroundColor = 'green';
};

let colorBlue = (e) => {
    e.target.style.backgroundColor = 'blue';
};


// EVENT LISTENERS
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', colorGreen);
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('dblclick', colorBlue);
}
