//You are provided with a string ‘s’. Your task is to reverse the string using stack Data Structure.



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
    var ar = data[0].split(" ");
    
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