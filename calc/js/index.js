// * При клике на клавиши с цифрами - набор введенных цифр должен быть показан на табло калькулятора.
// * При клике на знаки операторов (`*`, `/`, `+`, `-`) на табло ничего не происходит - программа ждет введения
// второго числа для выполнения операции. (updated - blink)
// * Если пользователь ввел одно число, выбрал оператор, и ввел второе число, то при нажатии как кнопки `=`,
// так и любого из операторов, в табло должен появиться результат выполенния предыдущего выражения.
// * При нажатии клавиш `M+` или `M-` в левой части табло необходимо показать маленькую букву `m` - это значит,
// что в памяти хранится число. Нажатие на `MRC` покажет число из памяти на экране. Повторное нажатие `MRC`
// должно очищать память.

// 3/0 - infinity
// 0/0 - Nan

let memory,a,operation,
    tabloShouldBeCleaned = false, 
    memoryShouldBeCleaned = false,
    waitNumber = true;

const handler = () => {
    const scoreboard = document.getElementById("scoreboard");
    
    document.getElementById("keyboard").addEventListener("click", (e)=>{
        if(e.target.type !== "button"){
            return;
        }
        switch(e.target.value){
            case "mrc": memoryShouldBeCleaned ? memClean() : memRead(); break;
            case "m-": remember(-scoreboard.value); break;
            case "m+": remember(scoreboard.value); break;
            case "C": cleanPressed(); break;
            case "-": minusPressed(scoreboard.value); break;
            case "/":
            case "*":
            case "+": operationPressed(scoreboard.value, e.target.value); break;
            case "=": equalPressed(scoreboard.value); break;
            default: digitPressed(e.target.value);
        }
    })
}

window.addEventListener("DOMContentLoaded", handler);

//hendlers for buttons

const memClean = () => {
    memory = undefined;
    hintM()
}

const memRead = () => {
    if (memory===undefined) return;
    showOnScoreboard(memory); 
    memoryShouldBeCleaned=true;
    tabloShouldBeCleaned = false;
    waitNumber = false;
    if (a!==undefined){
        equalOn()
    }
}

const remember = (c) => {
    memory = c; 
    showM();
    resetMrc()
}

const cleanPressed = () => {
    cleanVars();
    waitNumber = true;
    cleanScoreboard();
    equalOff();
    resetMrc();
}

const minusPressed = (value) => {  
    if (waitNumber){            
        showOnScoreboard('-')
        tabloShouldBeCleaned = false;
        resetMrc()
    } else{
        operationPressed(value, '-');
    }
}

const operationPressed = (value,op) => {
    if(value === "") return;
    if(a!==undefined && !tabloShouldBeCleaned){
        showOnScoreboard(calculate(value));
    }else{
        a = parseFloat(value);
    }
    blink();
    waitNumber = true;
    tabloShouldBeCleaned = true;
    operation = op;
    resetMrc();
}

const equalPressed = (value) => {
    if (!tabloShouldBeCleaned){
        showOnScoreboard(calculate(value)); 
        tabloShouldBeCleaned = true;
    }
    cleanVars();
    waitNumber = false;
    resetMrc();
}

const digitPressed = (digit) => {
    if (tabloShouldBeCleaned){
        cleanScoreboard();
        tabloShouldBeCleaned = false;
    }
    if (a!==undefined){
        equalOn();
    }
    showOnScoreboard(getScoreboardVal() + digit);
    waitNumber = false;
    resetMrc();
}

//additional functions

const calculate = (b) => {
    let res;
    b = parseFloat(b);
    if (b===undefined) {
        return a;
    }
    if (a===undefined) {
        return b;
    }
    switch(operation){
        case"/": res = a/b; break;
        case"*": res = a*b; break;
        case"+": res = a+b; break;
        case"-": res = a-b; break;
        default:
            console.error("operation is " + operation);
    }
    cleanVars();
    waitNumber = false;
    return a=res;
}

const blink = () => {
    const c = getScoreboardVal();
    cleanScoreboard();
    setTimeout(()=>{ 
        showOnScoreboard(c); 
    }, 100);
}

const cleanVars = () => {
    a = undefined;
    operation = undefined;
    equalOff();
}

//reset cleaning memory on the second pressing mrc button

const resetMrc = () => {
    memoryShouldBeCleaned=false;
}

//disabled/activate button equal [=]

const equalOn = () => {
    document.getElementById("equal").disabled = false;
}

const equalOff = () => {
    document.getElementById("equal").disabled = true;
}

//Show and hint small m

const showM = () => {
    document.getElementById("mem").classList.remove("hinted");
}

const hintM = () => {
    document.getElementById("mem").classList.add("hinted");
}

//working with scoreboard

const cleanScoreboard = () => {
    document.getElementById("scoreboard").value = '';
}

const showOnScoreboard = (value) => {
    document.getElementById("scoreboard").value = value; 
}

const getScoreboardVal = () => {
    return document.getElementById("scoreboard").value;
}
