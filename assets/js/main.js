let color = "black";
let click = true;
const outputBox1 = document.querySelector("#output1");
const outputBox2 = document.querySelector("#output2");
outputBox1.textContent = `Color: ${color}`;
outputBox2.textContent = "Mode: Coloring";

const createGrid = size => {
    const boardContainer = document.querySelector('.board-container');
    const grid = boardContainer.querySelectorAll('div');
    grid.forEach(div => div.remove());
    boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    boardContainer.style.gridTemplateRows = `repeat(${size}, 1fr`;
    const amount = size * size;
    for (let i = 0; i < amount; i++) {
        const grid = document.createElement('div',);
        grid.addEventListener('mouseover', colorGrid)
        grid.style.backgroundColor = 'rgb(62, 75, 92)';
        boardContainer.insertAdjacentElement("beforeend", grid);
    };
};

createGrid(16);

const resetBoard = () => {
    const boardContainer = document.querySelector('.board-container');
    const grid = boardContainer.querySelectorAll('div');
    grid.forEach((div) => {
        div.style.backgroundColor = "rgb(62, 75, 92)"
    });
    color = "black";
    outputBox1.textContent = `Color: ${color}`;
}

const changeSize = input => {
    if (input >= 1 && input <= 100) {
        //document.querySelector(".error").style.display = "none";
        createGrid(input);
    } else {
        console.log("ERROR invalid Size");
        outputBox1.textContent = `ERROR invalid Size [${input}]`;
        //document.querySelector(".error").style.display = "flex";
    }
};

function colorGrid() {
    if(click) {
    this.style.backgroundColor = color;
}
}
function randomColor() {
    return random = setInterval(() => {
        color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;   
    }, 1);
}
function stopColor() {
    clearInterval(random);
}
const colorChange = () => {
    const btnOptions = document.querySelectorAll(".btn-container");
    btnOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            color = e.target.id;
            stopColor();
            if (color === "white") {
                outputBox1.textContent = `Color: ${color}`;
                color = "white";
            } else if (color === "reset"){
                outputBox1.textContent = `Color: ${color}`;
                resetBoard();
            } else if (color === "eraser"){
                outputBox1.textContent = `Color: ${color}`;
                color = "rgb(62, 75, 92)";
            } else if (color === "black"){
                outputBox1.textContent = `Color: ${color}`;
                color = "black";
            } else{
                outputBox1.textContent = `Color: ${color}`;
                randomColor();
            };
        });
    });
};
colorChange();
document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        outputBox2.textContent = "Mode: Coloring";
      } else {
        outputBox2.textContent = "Mode: Not Coloring";
      }
    }
});