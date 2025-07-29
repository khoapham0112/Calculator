let result = document.querySelector("#result");
let allClearbtn = document.querySelector("#allClear");
let clearbtn = document.querySelector("#clear");
let modolubtn = document.querySelector("#modolu");
let divisionbtn = document.querySelector("#division");
let addbtn = document.querySelector("#add");
let minusbtn = document.querySelector("#minus");
let multiplybtn = document.querySelector("#multiply");
let dotbtn = document.querySelector("#dot");
let equalbtn = document.querySelector("#equal");
let digit0btn = document.querySelector("#number0");
let digit1btn = document.querySelector("#number1");
let digit2btn = document.querySelector("#number2");
let digit3btn = document.querySelector("#number3");
let digit4btn = document.querySelector("#number4");
let digit5btn = document.querySelector("#number5");
let digit6btn = document.querySelector("#number6");
let digit7btn = document.querySelector("#number7");
let digit8btn = document.querySelector("#number8");
let digit9btn = document.querySelector("#number9");


let x = '';
let y = '';
let currentOperator = null;
let shouldResetScreen = true;

function appendNumber(number) {
    if (result.textContent == '0' || shouldResetScreen){
        resetScreen();
    }

    result.textContent += number;
}

function resetScreen() {
    result.textContent = '';
    shouldResetScreen = false;
}

digit0btn.addEventListener("click", () => appendNumber(digit0btn.textContent));
digit1btn.addEventListener("click", () => appendNumber(digit1btn.textContent));
digit2btn.addEventListener("click", () => appendNumber(digit2btn.textContent));
digit3btn.addEventListener("click", () => appendNumber(digit3btn.textContent));
digit4btn.addEventListener("click", () => appendNumber(digit4btn.textContent));
digit5btn.addEventListener("click", () => appendNumber(digit5btn.textContent));
digit6btn.addEventListener("click", () => appendNumber(digit6btn.textContent));
digit7btn.addEventListener("click", () => appendNumber(digit7btn.textContent));
digit8btn.addEventListener("click", () => appendNumber(digit8btn.textContent));
digit9btn.addEventListener("click", () => appendNumber(digit9btn.textContent));

function equal() {
    let input1 = Number(x);
    let input2 = Number(y);

    if (x == '' || y == ''){
        return;
    } else if ( currentOperator == "add" ){
        return input1 + input2;
    } else if ( currentOperator == 'minus'){
        return input1 - input2;
    } else if ( currentOperator == 'multiply') {
        return input1 * input2;
    } else if (currentOperator == "division") {
        return input1 / input2;
    } else if (currentOperator == 'modolu') {
        return input1 % input2;
    }
}

function operation(operator) {
    if (currentOperator !== null){
        if (currentOperator === null || shouldResetScreen){
            return;
        }
        if (currentOperator === 'division' && y === '0'){
            alert("can't divided by 0");
            return;
        } 

        y = result.textContent;
        result.textContent = rounded(equal());
        currentOperator = null;
    }

    x = result.textContent;
    shouldResetScreen = true;
    currentOperator = operator;
}

addbtn.addEventListener('click', () => operation('add'));
modolubtn.addEventListener('click', () => operation('modolu'));
divisionbtn.addEventListener('click', () => operation('division'));
minusbtn.addEventListener('click', () => operation('minus'));
multiplybtn.addEventListener('click', () => operation('multiply'));

equalbtn.addEventListener("click", () => {
    if (currentOperator === null || shouldResetScreen){
            return;
        }
        if (currentOperator === 'division' && y === '0'){
            alert("can't divided by 0");
            return;
        } 

        y = result.textContent;
        result.textContent = rounded(equal());
        currentOperator = null;
})

dotbtn.addEventListener('click', () => {
    if (result.textContent == '0' || shouldResetScreen){
        resetScreen();
        result.textContent += '0.';
        return;
    }
    
    if (result.textContent.includes(".")){
        return;
    }

    result.textContent += '.';
})

clearbtn.addEventListener('click', () => {
    let clearNumb = result.textContent.length > 1 ? result.textContent.slice(0, -1) : "0";
    result.textContent = clearNumb;
})

allClearbtn.addEventListener('click', () => {
    result.textContent = '0';
    x = '';
    y = '';
    currentOperator = null;
    shouldResetScreen = true;
})

function rounded(number){
    return Math.round(number * 10) / 10;
}










