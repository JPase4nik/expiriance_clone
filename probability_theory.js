
let count = 5
let minValue = 100
let maxValue = 1000

let even = 0
let odd = 0
let persent = 0

for (let i = 1; i <= count; i++) {
    let number = getRandomInt(minValue, maxValue)
    if (number % 2 === 0) {
        even++
    } else {
        odd++
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let percentage = (even / count) * 100;

console.log(`even = ${even}, odd = ${odd}, percentage = ${Math.floor(percentage)}%`);

