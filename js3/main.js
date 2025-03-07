const elementTxt = document.getElementById("elements");
let numbInput = document.getElementById("numbInput")
const sumTxt = document.getElementById("sum");
const highTxt = document.getElementById("high")
const lowTxt = document.getElementById("low")
let sum = 0;
let largest=0;

let arr = [];

function insertNum() {
    arr.push(parseInt(numbInput.value));
    let smallest=arr[0];
    for (let i = 0; i <arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        i(arr[i] < smallest){
            smallest = arr[i];
        }
        if (arr[i] > largest){
            largest = arr[i];
        }

}

elementTxt.innerHTML = arr.join("<br");
sumTxt.innerHTML = sum;
highTxt.innerHTML = largest;
lowTxt.innerHTML = smallest;
console.log(arr);
}