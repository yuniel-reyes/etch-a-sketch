// Create function gridsHeight
function gridsHeight(gridNumber){
    const BIG_SQUARE_AREA = Math.pow(650, 2);
    const squareTotal = Math.pow(gridNumber, 2);
    const THIS_HEIGHT = Math.sqrt(BIG_SQUARE_AREA / squareTotal);
    return THIS_HEIGHT;
}

// Make a YxY grid of square divs
// Create two loops:  
function makeGrid(gridNumber = 1){
    const THIS_HEIGHT = gridsHeight(gridNumber); // Get height of each div-grid according to number of grids
    for (let outer = 0; outer < Number(gridNumber); outer++){  // For each iteration of the outer loop, the inner loop will iterate 16 times
        for (let inner = 0; inner < Number(gridNumber); inner++){ 
            let newDiv = document.createElement('div'); // For each iteration of the inner lop, create a div element
            newDiv.classList.add('eachDiv'); // Add to it the eachDiv class
            newDiv.style.height = THIS_HEIGHT.toString() + "px"; // Convert height to string and pass it with its units
            theGrid.appendChild(newDiv);
        }
        if (gridNumber > 1){
            // For each iteration of the outer loop, a break div has to be inserted:
            // Create breakDiv element
            let breakDiv = document.createElement('div');
            breakDiv.classList.add('break');
            theGrid.appendChild(breakDiv);    
        }
    }
    allDivGrid = theGrid.querySelectorAll('.eachDiv');
    allDivGrid.forEach(div => div.addEventListener('mouseover', changeColor));
    return;
}


// Create changeColor() function
function changeColor(e){
    e.stopPropagation();
    e.target.classList.toggle("colorChange"); // activate/deactivate the colorChange class 
}

// getNumber ask the user for a number for the grid
// and remove all elements of the main-container
function getNumber(){
    let thisNumber = prompt("Grid number");
    while (thisNumber > 100){
        alert("Grid number can't be greater than 100");
    }
    while (theGrid.hasChildNodes()){ // remove every grid-div from the old big grid before 
        theGrid.removeChild(theGrid.firstChild) // generating the new one
    }
    makeGrid(thisNumber);
}


// Call the function makeGrid at least once every time the page is load
window.onload = function(){
    makeGrid();
};


// ==REFERENCES==
// Get grid node reference
const theGrid = document.getElementById('main-container');


// Get reference of each div-grid
// Use a live nodeList instead of a static one
// as grids will be constantly updated  
let allDivGrid = theGrid.querySelectorAll('.eachDiv');
// For every grid-div with the pointer over it, 
// call the function changeColor()
allDivGrid.forEach(div => div.addEventListener('mouseover', changeColor));


// Get button reference
const theButton = document.querySelector('.big-button');
// Add event listener for when the button is clicked
theButton.addEventListener('click', getNumber);
