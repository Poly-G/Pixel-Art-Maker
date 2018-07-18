//Variables
//select grid in html, and create a grid var
const grid = document.getElementById("pixelCanvas");
//grab the size picker
const gridSize = document.getElementById("sizePicker");
//grab color picker
const cellColor = document.getElementById('colorPicker');
// grab form to listen for submit
const form = document.getElementById('sizePicker')

// click submit to create grid
gridSize.addEventListener("submit", makeGrid, false);

function makeGrid() {
  // so grid doesnt colapse;
  // event.preventDefault();
  // clear grid
grid.innerHTML = '';
  //grid height
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
// paint function
grid.addEventListener("click", function(event) {
  // find out which element triggered event
  console.log(event)
  let trigger = event.target;
  // use event to fill in cell
  if (trigger.tagName == "TD") {
    trigger.style.background = cellColor.value;
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
})
