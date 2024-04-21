let ageStr = prompt("How old are you?");
let age = parseInt(ageStr);

if (isNaN(age) || age < 0) {
    alert("The age is invalid");
} else {
    let lastDigit = age % 10;
    let lastTwoDigits = age % 100;
    let ageMessage = 'років';

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        ageMessage = 'років';
    } else if (lastDigit === 1) {
        ageMessage = 'рік';
    } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
        ageMessage = 'роки';
    }

    let resultMessage = `${age} ${ageMessage}`;
    console.log(resultMessage); 
    document.body.innerHTML += `<p>${resultMessage}</p>`; 
} 



