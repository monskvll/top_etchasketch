
function createGridSquare() {
    for(i = 0; i < 256; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.setAttribute('class', 'square');
        container.appendChild(gridSquare);        
    }  
}

gridSquare.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = 'black';

    setTimeout(function() {
        event.target.style.backgroundColor = '';
    }, 500);
}, false);

createGridSquare();

