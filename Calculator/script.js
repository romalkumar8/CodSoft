let display = document.getElementById('display');
let currentInput = '';
let firstNumber = '';
let operator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }

    if (value === '+' || value === '-') {
        if (firstNumber === '') {
            firstNumber = currentInput;
            operator = value;
            currentInput = '';
        } else {
            calculate();
            operator = value;
        }
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
    resultDisplayed = false;
}

function calculate() {
    if (currentInput !== '' && firstNumber !== '') {
        let secondNumber = currentInput;
        switch (operator) {
            case '+':
                currentInput = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
                break;
            case '-':
                currentInput = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
                break;
        }
        display.value = currentInput;
        firstNumber = currentInput;
        operator = '';
        resultDisplayed = true;
    }
}
