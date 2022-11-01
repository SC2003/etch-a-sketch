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
    if (click) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}
// function colorGrid() {
//     // if (click) {
//     if (color === "random") {
//         color = `hsl(${Math.random * 360}, 100%, 50%)`;
//     } else {
//     this.style.backgroundColor = color;
// }
// //}
// }
const resetBoard = () => {
    const boardContainer = document.querySelector('.board-container');
    const grid = boardContainer.querySelectorAll('div');
    grid.forEach((div) => {
        div.style.backgroundColor = "rgb(62, 75, 92)"
    });
}
const colorChange = (choice) => {
    color = choice;
    
}
// colorChange();
document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
      if (click) {
        //document.querySelector(".mode").textContent = "Mode: Coloring";
      } else {
        //document.querySelector(".mode").textContent = "Mode: Not Coloring";
      }
    }
  });
  const btnOptions = document.querySelectorAll(".btn-container");
  btnOptions.forEach(option => {
      option.addEventListener('click', (e) => {
          color = e.target.id;
          if (color === "white") {
              color = "white";
          } else if (color === "reset") {
              resetBoard();
          } else if (color === "eraser") {
              color = "rgb(62, 75, 92)";
          } 
          // else if (color === "random") {
          //     setTimeout(() => {
          //         color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
          //     }, 1);
          // }
          else {
              color;
          }
      })
  })