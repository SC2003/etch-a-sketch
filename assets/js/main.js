let color = "black";
let click = true;
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
}

const changeSize = input => {
    if (input >= 1 && input <= 100) {
        //document.querySelector(".error").style.display = "none";
        createGrid(input);
    } else {
        console.log("ERROR invalid Size");
        //document.querySelector(".error").style.display = "flex";
    }
};

function colorGrid() {
    this.style.backgroundColor = color;

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
            if (color === "white") color = "white"; 
            else if (color === "reset") resetBoard();
            else if (color === "eraser") color = "rgb(62, 75, 92)";
            else if (color === "black") color = "black";
            else randomColor();
        })
    })
}
colorChange();