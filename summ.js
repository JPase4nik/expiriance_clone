let resultSum = 0

for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0) {
        resultSum += i
    }  
}

console.log(resultSum);
document.body.innerHTML += `<p>${resultSum}</p>`; 





