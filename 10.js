//Rajesh was going through alternative array sorting. He wishes to print the array alternatively. Hence hired you. Your task is to help rajesh in printing the array alternatively.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});
let inputs = [];
inp.on("line", (data) => {
  inputs.push(data);
});
inp.on("close", () => {
    var arr = inputs[1].split(" ");
    
    for(let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    
    arr.sort((a, b) => a - b);

var result = [];

var a = 0, b = arr.length - 1;

while (result.length < arr.length) {
  result.push(arr[b]);
  
  if (a !== b) {
    result.push(arr[a]);
  }

  a++;
  b--;
}

console.log(result.join(" "));
});