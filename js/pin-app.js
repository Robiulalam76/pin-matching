function getPinGenerate() {
    const random = Math.round(Math.random() * 500000000);
    return random
}

function getPin() {
    const randomPin = getPinGenerate()
    const randomPinString = randomPin + '';

    if (randomPinString.length === 6) {
        return randomPin;
    }
    else {
        return getPin();
    }
}


document.getElementById('generate-btn').addEventListener('click', function () {
    const randomPinFinal = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = randomPinFinal;
})


document.getElementById('calculator-numbers').addEventListener('click', function (event) {
    const digitTyped = event.target.innerText;

    const digitField = document.getElementById('digit-field');
    const previousDigitFieldValue = digitField.value;
    console.log(typeof previousDigitFieldValue)

    if (isNaN(digitTyped)) {
        if (digitTyped === 'C') {
            digitField.value = '';
        }
        else if (digitTyped === '<') {
            const splitDigitValue = digitField.value.split('');
            splitDigitValue.pop();
            const joinDigitValue = splitDigitValue.join('');
            digitField.value = joinDigitValue;
        }
    }
    else {
        const newDigitFieldValue = previousDigitFieldValue + digitTyped;
        digitField.value = newDigitFieldValue;
    }


})


// submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const correctPin = displayPin.value;

    const digitField = document.getElementById('digit-field');
    const typeDigit = digitField.value;

    // Correct and incorrect message
    const correctMessage = document.getElementById('correct-message');
    const incorrectMessage = document.getElementById('incorrect-message');

    if (correctPin === typeDigit) {
        correctMessage.style.display = 'block';
        incorrectMessage.style.display = 'none';
    }
    else {
        incorrectMessage.style.display = 'block';
        correctMessage.style.display = 'none';
    }
})