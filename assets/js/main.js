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

    colorChange();
    clickSwitch();
    randomColorBG();
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
        createGrid(input);
    } else {
        outputBox1.textContent = `ERROR invalid Size`;
    }
};

function colorGrid() {
    if (click) {
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

function randomColorBG() {
    return bg = setInterval(() => {
        const randomBtn = document.querySelector("#random");
        let bg = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        randomBtn.style.cssText = `background-color: ${bg}; border: 1px solid ${bg};`;
    }, 1500);
}
function colorChange() {
    const btnOptions = document.querySelectorAll(".btn-container");
    btnOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            color = e.target.id;
            stopColor();
            if (color === "white") {
                outputBox1.textContent = `Color: ${color}`;
                color = "#fff";
            } else if (color === "reset") {
                outputBox1.textContent = `Color: ${color}`;
                resetBoard();
            } else if (color === "eraser") {
                outputBox1.textContent = `Color: ${color}`;
                color = "rgb(62, 75, 92)";
            } else if (color === "black") {
                outputBox1.textContent = `Color: ${color}`;
                color = "black";
            } else if (color === "color-picker") {
                outputBox1.textContent = `Color: ${e.target.value}`;
                color = e.target.value;
                e.target.style.cssText = `background-color: ${color}; border: 15px solid ${color};`
            } else {
                outputBox1.textContent = `Color: ${color}`;
                randomColor();
            };
        });
    });
};
function clickMode(e) {
    if (e.target.tagName != "BUTTON") {
        click = !click;
        if (click) {
            outputBox2.textContent = "Mode: Coloring";
        } else {
            outputBox2.textContent = "Mode: Not Coloring";
        }
    }
};

function clickSwitch() {
    const onBtn = document.querySelector('#on-btn');
    const offBtn = document.querySelector('#off-btn');
    if (onBtn.checked) {
        outputBox2.textContent = "Mode: Coloring";
        document.querySelector("body").addEventListener("click", clickMode)
    } else if (offBtn.checked) {
        outputBox2.textContent = "Pause Disabled";
        document.querySelector("body").removeEventListener("click", clickMode)
        click = true;
    } else outputBox2.textContent = "ERROR";
}