const container = document.querySelector('#container');
const reset = document.querySelector('#reset-button');

window.addEventListener('load', setDefaultGrid);
reset.addEventListener('click', changeSize)

function setDefaultGrid() {
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;                
}

function fillGrid(size) {

    for(i = 0; i < size*size; i++) {        
        let gridSquare = document.createElement('div');        
        gridSquare.setAttribute('class', 'square');
        container.appendChild(gridSquare);
        
        gridSquare.addEventListener("mouseover", function (event) {
            /* gridSquare.classList.add('square-color');    can be used with class instead*/
            gridSquare.style.backgroundColor = `hsl(${Math.random() * 50}, 100%, 50%)`;
        });
    }
}

function changeSize() {
    let newSize = prompt("Choose a new grid size (1-100).");

    if (newSize != null) {
        newSize = parseInt(newSize);

        if (newSize < 1 || newSize > 100 ||  Number.isNaN(newSize)) {
            alert("Enter a number between 1 and 100.")
            changeSize();
        } else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {    
    const gridSquaresArray = Array.from(container.childNodes);
    gridSquaresArray.forEach((container) => {
        /* container.classList.remove('square-active');     used to remove class instead*/         
        container.style.backgroundColor = 'white';
    });    
}

/* Thanks to rlmoser99, michalosman and RebeccaML for their well-written code which I actively consulted during moments of terrible doubt */