//Variables
const grid = document.getElementById("pixelCanvas");
const cellColor = document.getElementById('colorPicker');
const form = document.getElementById('sizePicker');

// click submit to create grid
form.addEventListener("submit", makeGrid);


function makeGrid(event) {
  // clear grid
  grid.innerHTML = '';
  //grid height
  event.preventDefault();
  const gridHeight = document.getElementById("inputHeight").value;
  //grid width
  const gridWidth = document.getElementById("inputWidth").value;
  // grid loop
  for (let r = 0; r < gridHeight; r++) {
    let row = document.createElement('tr');
    for (let c = 0; c < gridWidth; c++) {
      let col = document.createElement('td');
      row.appendChild(col);
    }
    grid.appendChild(row);
  }

}

grid.addEventListener("click", paint);

// paint function
function paint (event) {
  // find out which element triggered event
  let trigger = event.target;
  // use event to fill in cell
  if (trigger.tagName == "TD") {
    trigger.style.background = cellColor.value;
  }
};


for (let i = 0; i < ?; i++) {
  
}
