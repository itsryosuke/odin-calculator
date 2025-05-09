function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return "KEK";
    else return a / b;
}

function remainder(a, b) {
    return a % b;
}

let firstNumber;
let operator;
let secondNumber;

function operate(num1, operator, num2) {
    let result;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "%":
            result = remainder(num1, num2);
            break;
    }
    return result;

}
/*
function updateDisplay() {
    const display = document.querySelector("#display");
    const digits = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const equals = document.querySelector("#equals");

    digits.forEach(function(myButton) {
        myButton.onclick = () => {
            if (display.textContent == firstNumber) {
                display.textContent = "";
            }

            if (!(display.textContent.length >= 9)) {  
                display.textContent += myButton.textContent;
            }
        }
    })

    operators.forEach(function(myButton) {
        myButton.onclick = () => {
            if (firstNumber === undefined) {
                firstNumber = parseFloat(display.textContent);
            operator = myButton.textContent;
            display.textContent = "";
            }
            else {
                equality();
                firstNumber = parseFloat(display.textContent);
                operator = myButton.textContent;

            }
            
        }
    })

    function equality() {
        secondNumber = parseFloat(display.textContent);
        display.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = undefined;
        secondNumber = undefined;
    }

    equals.onclick = () => equality();
}
updateDisplay();
*/

const display = document.querySelector("#display");
const digits = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
let displayValue = "";
let checkReset;

function updateDisplay() {
    if ((displayValue.toString()).length <= 9) {
        display.textContent = displayValue;
    }
    else {
        if (Number.isInteger(parseFloat(displayValue))) {
            display.textContent = parseFloat(displayValue).toExponential(2);
        }
        else {
            display.textContent = displayValue.toString().slice(0, 9);
        }
        
    }
}

digits.forEach(function(myButton) {
    myButton.onclick = () => {
        if (checkReset === true) {
            displayValue = "";
        }
        else if (!(operator === undefined)) {
            display.textContent = "";
        }
        displayValue += myButton.textContent;
        updateDisplay();
        checkReset = false;
    }
})

operators.forEach(function(myButton) {
    myButton.onclick = () => {
        if(!(operator === undefined) && displayValue == '') {
            operator = myButton.textContent;
        }

        else if (firstNumber === undefined || isNaN(firstNumber)) {
           operator = myButton.textContent;
        firstNumber = parseFloat(displayValue);
        displayValue = "";  
        }
        else {
            equality();
            firstNumber = displayValue;
            operator = myButton.textContent;
            displayValue = "";
        }
        
    }
})

function equality() {
    secondNumber = parseFloat(displayValue);
    if (firstNumber === undefined ||
        isNaN(secondNumber) ||
        operator === undefined
        ) {}
    else {
    displayValue = operate(firstNumber, operator, secondNumber);
    updateDisplay();
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    checkReset = true;
    }
}

equals.onclick = () => equality();

clear.onclick = () => {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    displayValue = "";
    updateDisplay();
}

decimal.onclick = () => {
    if (displayValue === "" || displayValue.toString().includes(".")) {}
    else {
        displayValue += decimal.textContent;
        updateDisplay();
    }
}

backspace.onclick = () => {
    displayValue = displayValue.toString().slice(0, -1);
    updateDisplay();
}







