//You are given with an array. For each element present in the array your task is to print the next smallest than that number. If it is not smallest print -1


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var data = [];

inp.on("line", (dat) => {
  data.push(dat);
});

inp.on("close", () => {
    var ar = data[1].split(" ");
    
    var stack = [];
    
    
    
    var ans = [];
    
    for(let i = 0; i < ar.length; i++){
        ar[i] = parseInt(ar[i]);
    }
    
    stack.push(ar[0]);
    
    for(let i = 1; i < ar.length; i++){
        if(ar[i] > stack[stack.length - 1] || stack.length === 0){
            stack.push(ar[i]);
        } else {
            while(ar[i] < stack[stack.length - 1]){
                ans.push(ar[i]);
                stack.pop();
            }
            stack.push(ar[i]);
        }
    }
    while(ans.length < ar.length){
        ans.push(-1);
    }
    
    console.log(ans.join(" "));
});

