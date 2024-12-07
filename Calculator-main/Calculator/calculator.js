const display = document.getElementById("display");

let resultCalculated = false;

function appendToDisplay(value) {
    if (resultCalculated) {
        if (isOperator(value)) {
            display.value += value;
        } else {
            display.value = value;
        }
        resultCalculated = false;
    } else {
        display.value += value; 
    }
}


function clearDisplay() {
    display.value = "";
}

function isOperator(char) {
    return ["+", "-", "*", "/"].includes(char);
}


function calculate() {
    try {
        const expression = display.value.replace(/÷/g, "/");
        const result = eval(expression);
        display.value = Number.isFinite(result) ? result : "Error";
        resultCalculated = true;
    } catch (error) {
        display.value = "Error"; 
        resultCalculated = true; 
    }
}


function deleteLast() {
    if (resultCalculated) {
        clearDisplay();
        resultCalculated = false;
    } else {
        display.value = display.value.slice(0, -1);
    }
}
