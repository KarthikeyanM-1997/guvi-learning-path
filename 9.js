//There is a business analysis company named “AJ”. It hired two interns “A” and “B”. Both of them are given tasks to sell product in n days. The one who will sell more share will get the job. As A and B are good friends they decided that they will equalize the collected money, they are only allowed to swap more than one day’s share to make the total of each same. Your task is to help them.


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var data = [];

inp.on("line", (dat) => {
  data.push(dat);
});

inp.on("close", () => {
    var ar1 = data[1].split(" ");
    var ar2 = data[2].split(" ");
    
    var ard = [];
    
    var sum1 = 0;
    
    var sum2 = 0;
    
    for(let i = 0; i < ar1.length; i++){
        ar1[i] = parseInt(ar1[i]);
        ar2[i] = parseInt(ar2[i]);
        ard[i] = Math.abs(ar1[i] - ar2[i]);
        
        sum1 += ar1[i];
        sum2 += ar2[i];
    }
    
    var req = Math.abs(sum1 - sum2) / 2;
    
    var flag = false;
    
    for(let i = 0; i < ar1.length; i++){
        if(ard[i] === req){
            flag = true;
            break;
        }
    }
    
    if(flag){
        console.log("yes");
    }
    else{
        console.log("no");
    }
    
}); 