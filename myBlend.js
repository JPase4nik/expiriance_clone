const numbers = [ 4, 5, 6, 7, 8, 9, 1, 2, 3];

function myBlend(arr) {
    return arr.sort(() => {return Math.random() - 0.5} )
}

console.log(myBlend(numbers));


