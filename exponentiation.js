const output = document.getElementById("output");

const form = document.getElementById("form");

function pow(basis,degree) { 
  let result = 1;
  if (isNaN(basis) || isNaN(degree)) {
    result = 'Add correct data'
  }
  if (basis === 0) {
    result = 0
  }
  if (degree < 0) {
    for (let i = 0; i < degree*-1; i++) {
      result *= basis
    }
    let print  = '';
    if (result < 0) {
      print = '-1/' + result*-1 
    } else {
      print = '1/' + result
    }
    result = print
  }
  if (degree) {    for (let i = 0; i < degree; i++) {

      result *= basis
    }
  }
  output.innerHTML = result;
} 


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const basis = formData.get('basis')
  const degree = formData.get('degree')
  pow(parseInt(basis) ,parseInt(degree))
});