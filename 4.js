//You are given with a queue. Your task is to reverse the queue elements and print it.



// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (dat) => {
  data.push(dat);
});

var data = [];

inp.on("close", () => {
    var ar = data[1].split(" ");
    
    var stack = [];
    
    for(let i = 0; i < ar.length; i++){
        stack.push(ar[i]);
    }
    
    var out = "";
    
    while(stack.length > 0){
        out += stack.pop() + " ";
    }
    
    console.log(out.substring(0, out.length - 1));
});