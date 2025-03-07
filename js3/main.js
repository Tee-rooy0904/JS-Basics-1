let elementTxt = document.getElementById("elements");
let numbInput = document.getElementById("numbInput")
let sumTxt = document.getElementById("sum");
let highTxt = document.getElementById("high")
let lowTxt = document.getElementById("low")

let arr = [];

arr.push(23);
arr.push(55);
arr.push(10);
arr.push(90);
arr.push(18);

for(let i=0; i<arr.length; i++ ) {
    sum += arr[i];
}

elementTxt.innerHTML = arr.join("<br>");
sumTxt.innerHTML = sum;
console.log(arr);