
function increasing(height, symbol) {
  let row = symbol; 
  output.innerHTML += `${row}</br>`
  for (let i = 1; i < height; i++) {
    row += symbol;
    output.innerHTML += `${row}</br>`
  }
}

function decreasing(height, symbol) {
  for (let i = height; i > 0; i--) {
    let reversedRow = '';
    for (let j = 0; j < i; j++) {
      reversedRow += symbol;
    }
    output.innerHTML += `${reversedRow}</br>`;
  }
}

function printTriangle(height = 5, symbol = '*', direction = 'increasing', both = false) {
  if (both) {
    increasing(height,symbol)
    output.innerHTML += `</br>`
    decreasing(height,symbol)
  } else if (direction === 'increasing') {
    increasing(height,symbol)
  } else {
    decreasing(height,symbol)
  }
}

const output = document.getElementById("output");
const reset = document.getElementById("reset");

reset.addEventListener("click", function(e) {
  e.preventDefault();
  output.innerHTML = ""; // Clear the output area
});

/*
  Variant 
*/
// const submit = document.getElementById('submit')
// submit.addEventListener('click', function(e) {
//   e.preventDefault()
//   const height = document.getElementById('height').value
//   const symbol = document.getElementById('symbol').value
//   const direction = document.getElementById('direction').value
//   const both = document.getElementById('both').checked
//   printTriangle(parseInt(height) , symbol, direction, both)
//   console.log(parseInt(height) , symbol, direction, both); 
//   // {height: '5', symbol: '+', direction: 'increasing', both: false}
// })

/*
  Variant 2
*/

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const height = formData.get('height')
  const symbol = formData.get('symbol')
  const direction = formData.get('direction')
  const both = formData.get('both')
  printTriangle(parseInt(height) , symbol, direction, !!both)
  console.log(parseInt(height) , symbol, direction, !!both); 
});