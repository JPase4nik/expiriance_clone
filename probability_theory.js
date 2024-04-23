function checkProbabilityTheory(count) {
    let even = 0
    let odd = 0

    for (let i = 1; i <= count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100) + 100)
        if (number % 2 === 0) {
            even++
        } else {
            odd++
        }
    }
    let percent = (even / count) * 100;
    return `count = ${count}, even = ${even}, odd = ${odd}, percentage = ${Math.floor(percent)}%`
}

console.log(checkProbabilityTheory(5));

