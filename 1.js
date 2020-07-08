//You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var dat = [];

inp.on("line", (data) => {
  dat.push(data);
});

inp.on("close", () => {
    var ar = dat[1].split(" ");

    if(parseInt(ar[0]) + parseInt(ar[1]) + parseInt(ar[2]) === parseInt(ar[ar.length - 1]) + parseInt(ar[ar.length - 2]) + parseInt(ar[ar.length - 3])){
        console.log(1);
    }
    else{
        console.log(0);
    }
});