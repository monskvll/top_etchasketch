function createGridSquare() {
    let gridSize = 16*16;

    for(i = 0; i < gridSize; i++) {        
        let gridSquare = document.createElement('div');        
        gridSquare.setAttribute('class', 'square');
        container.appendChild(gridSquare);

        gridSquare.addEventListener("mouseenter", function (event) {
            gridSquare.classList.add('square-test');    
        });

        document.getElementById("clearButton").addEventListener("click", function (event) {
            gridSquare.classList.remove('square-test')
        })
    }
}

function clearButton() {
    let gridInput = prompt("Choose a grid size (max. 100x100).", "0");
    let  gridSize = parseInt(gridInput + gridInput);
    return gridSize;
}

createGridSquare();