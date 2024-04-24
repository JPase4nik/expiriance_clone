
function customIsNaN(value) {
    return typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity ;
}

console.log(customIsNaN(NaN)); // true
console.log(customIsNaN(123)); // false
console.log(customIsNaN('abc')); // true
console.log(customIsNaN(undefined)); // true
console.log(customIsNaN(null)); // true
console.log(customIsNaN([])); // true
console.log(customIsNaN({})); // true
console.log(customIsNaN(function(){})); // true
console.log(customIsNaN(Infinity)); // true
console.log(customIsNaN(-Infinity)); // true