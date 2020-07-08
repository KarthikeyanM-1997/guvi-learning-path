//You are given a number n,ranging from 1 to n. Out of which one number is missing. Your task is to print that missing number.


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var data = [];

inp.on("line", (dat) => {

    data.push(dat);
});

inp.on("close", () => {
    let n = parseInt(data[0]);
    
    let ar = data[1].split(" ");
    let arr = []
    
    for(let i = 0; i < n; i++){
        arr[parseInt(ar[i])] = true; 
    }
    
    for(let i = 1; i < n; i++){
        if(arr[i] !== true){
            console.log(i);
        }
    }
});