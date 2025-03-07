const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const resultTxt2 = document.getElementById("diff");
const resultTxt3 = document.getElementById("prod");
const resultTxt4 = document.getElementById("quo");
let sum = 0;

function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;
        resultTxt2.innerHTML = diff();
        resultTxt3.innerHTML = prod();
        resultTxt4.innerHTML = quo();
    }
}
function diff() {
    return parseInt(num1Txt.value) - parseInt(num2Txt.value)
}
function prod() {
    return parseInt(num1Txt.value) * parseInt(num2Txt.value)
}
function quo() {
    return parseInt(num1Txt.value) / parseInt(num2Txt.value)
}


function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;

}

