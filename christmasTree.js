function printTree(count = 5, symbol = '*') {
  let row = symbol; 
  console.log(row);
  for (let i = 1; i < count; i++) {
    row = row + symbol;
    console.log(row);
  }
}
printTree(5, '&')
